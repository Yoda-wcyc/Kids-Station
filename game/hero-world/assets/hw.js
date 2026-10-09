(()=>{var U0=Object.defineProperty;var Ii=(n,t)=>{for(var e in t)U0(n,e,{get:t[e],enumerable:!0})};var dd=0,ph=1,pd=2;var lo=1,md=2,sr=3,os=0,Cn=1,Wn=2,Mi=0,rr=1,mh=2,gh=3,xh=4,gd=5;var Ss=100,xd=101,_d=102,yd=103,vd=104,Md=200,bd=201,Sd=202,wd=203,_h=204,yh=205,Ad=206,Ed=207,Td=208,Cd=209,Rd=210,Id=211,Pd=212,Ld=213,Dd=214,Ea=0,Ta=1,Ca=2,js=3,Ra=4,Ia=5,Pa=6,La=7,vh=0,Nd=1,Ud=2,ii=0,Mh=1,bh=2,Sh=3,wh=4,Ah=5,Eh=6,Th=7;var Ch=300,as=301,ws=302,ll=303,cl=304,co=306,Da=1e3,gi=1001,Na=1002,hn=1003,Fd=1004;var ho=1005;var sn=1006,hl=1007;var ls=1008;var On=1009,Rh=1010,Ih=1011,or=1012,ul=1013,si=1014,ri=1015,oi=1016,fl=1017,dl=1018,ar=1020,Ph=35902,Lh=35899,Dh=1021,Nh=1022,Xn=1023,xi=1026,cs=1027,Uh=1028,pl=1029,hs=1030,ml=1031;var gl=1033,uo=33776,fo=33777,po=33778,mo=33779,xl=35840,_l=35841,yl=35842,vl=35843,Ml=36196,bl=37492,Sl=37496,wl=37488,Al=37489,go=37490,El=37491,Tl=37808,Cl=37809,Rl=37810,Il=37811,Pl=37812,Ll=37813,Dl=37814,Nl=37815,Ul=37816,Fl=37817,Ol=37818,Bl=37819,zl=37820,kl=37821,Vl=36492,Gl=36494,Hl=36495,Wl=36283,Xl=36284,xo=36285,ql=36286;var Vr=2300,Ua=2301,Sa=2302,ah=2303,lh=2400,ch=2401,hh=2402;var Od=3200;var Fh=0,Bd=1,Oi="",nn="srgb",Gr="srgb-linear",Hr="linear",De="srgb";var wa=7680;var zd=519,kd=512,Vd=513,Gd=514,Yl=515,Hd=516,Wd=517,$l=518,Xd=519,Oh=35044;var Bh="300 es",ni=2e3,Wr=2001;function F0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function O0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qd(){let n=Xr("canvas");return n.style.display="block",n}var kf={},Qs=null;function qr(...n){let t="THREE."+n.shift();Qs?Qs("log",t,...n):console.log(t,...n)}function Yd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function re(...n){n=Yd(n);let t="THREE."+n.shift();if(Qs)Qs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ae(...n){n=Yd(n);let t="THREE."+n.shift();if(Qs)Qs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ys(...n){let t=n.join(" ");t in kf||(kf[t]=!0,re(...n))}function $d(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Zd={[Ea]:Ta,[Ca]:Pa,[Ra]:La,[js]:Ia,[Ta]:Ea,[Pa]:Ca,[La]:Ra,[Ia]:js},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Aa=Math.PI/180,Fa=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function B0(n,t){return(n%t+t)%t}function Oc(n,t,e){return(1-e)*n+e*t}function pi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hh=class Hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;var ve=Hh,yi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],p=i[s+2],d=i[s+3],h=r[o+0],g=r[o+1],_=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==g||p!==_){let x=l*h+c*g+p*_+d*y;x<0&&(h=-h,g=-g,_=-_,y=-y,x=-x);let m=1-a;if(x<.9995){let T=Math.acos(x),L=Math.sin(T);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L,l=l*m+h*a,c=c*m+g*a,p=p*m+_*a,d=d*m+y*a}else{l=l*m+h*a,c=c*m+g*a,p=p*m+_*a,d=d*m+y*a;let T=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=T,c*=T,p*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],p=i[s+3],d=r[o],h=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+p*d+l*g-c*h,t[e+1]=l*_+p*h+c*d-a*g,t[e+2]=c*_+p*g+a*h-l*d,t[e+3]=p*_-a*d-l*h-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),p=a(s/2),d=a(r/2),h=l(i/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*p*d+c*g*_,this._y=c*g*d-h*p*_,this._z=c*p*_+h*g*d,this._w=c*p*d-h*g*_;break;case"YXZ":this._x=h*p*d+c*g*_,this._y=c*g*d-h*p*_,this._z=c*p*_-h*g*d,this._w=c*p*d+h*g*_;break;case"ZXY":this._x=h*p*d-c*g*_,this._y=c*g*d+h*p*_,this._z=c*p*_+h*g*d,this._w=c*p*d-h*g*_;break;case"ZYX":this._x=h*p*d-c*g*_,this._y=c*g*d+h*p*_,this._z=c*p*_-h*g*d,this._w=c*p*d+h*g*_;break;case"YZX":this._x=h*p*d+c*g*_,this._y=c*g*d+h*p*_,this._z=c*p*_-h*g*d,this._w=c*p*d-h*g*_;break;case"XZY":this._x=h*p*d-c*g*_,this._y=c*g*d-h*p*_,this._z=c*p*_+h*g*d,this._w=c*p*d+h*g*_;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],p=e[6],d=e[10],h=i+a+d;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(p-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>d){let g=2*Math.sqrt(1+i-a-d);this._w=(p-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-i-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+p)/g}else{let g=2*Math.sqrt(1+d-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,p=e._w;return this._x=i*p+o*a+s*c-r*l,this._y=s*p+o*l+r*a-i*c,this._z=r*p+o*c+i*l-s*a,this._w=o*p-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),p=Math.sin(c);l=Math.sin(l*c)/p,e=Math.sin(e*c)/p,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wh=class Wh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),p=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*p,this.y=i+l*p+a*c-r*d,this.z=s+l*d+r*p-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;var Z=Wh,Bc=new Z,Vf=new yi,Xh=class Xh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=l,p[6]=i,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],p=i[4],d=i[7],h=i[2],g=i[5],_=i[8],y=s[0],x=s[3],m=s[6],T=s[1],L=s[4],b=s[7],A=s[2],C=s[5],N=s[8];return r[0]=o*y+a*T+l*A,r[3]=o*x+a*L+l*C,r[6]=o*m+a*b+l*N,r[1]=c*y+p*T+d*A,r[4]=c*x+p*L+d*C,r[7]=c*m+p*b+d*N,r[2]=h*y+g*T+_*A,r[5]=h*x+g*L+_*C,r[8]=h*m+g*b+_*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8];return e*o*p-e*a*c-i*r*p+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8],d=p*o-a*c,h=a*l-p*r,g=c*r-o*l,_=e*d+i*h+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(s*c-p*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(p*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=g*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;var de=Xh,zc=new de,Gf=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){let n={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===De&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===De&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gr]:{primaries:t,whitePoint:i,transfer:Hr,toXYZ:Gf,fromXYZ:Hf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:i,transfer:De,toXYZ:Gf,fromXYZ:Hf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var Se=z0();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,Oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ns===void 0&&(Ns=Xr("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},k0=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var V0=0,Vc=new Z,pn=class n extends _i{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,s=gi,r=sn,o=ls,a=Xn,l=On,c=n.DEFAULT_ANISOTROPY,p=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ki(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Ch;pn.DEFAULT_ANISOTROPY=1;var qh=class qh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],p=l[4],d=l[8],h=l[1],g=l[5],_=l[9],y=l[2],x=l[6],m=l[10];if(Math.abs(p-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-x)<.01){if(Math.abs(p+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+x)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,b=(g+1)/2,A=(m+1)/2,C=(p+h)/4,N=(d+y)/4,M=(_+x)/4;return L>b&&L>A?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=C/i,r=N/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=M/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=N/r,s=M/r),this.set(i,s,r,e),this}let T=Math.sqrt((x-_)*(x-_)+(d-y)*(d-y)+(h-p)*(h-p));return Math.abs(T)<.001&&(T=1),this.x=(x-_)/T,this.y=(d-y)/T,this.z=(h-p)/T,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;var Ze=qh,Ba=class extends _i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new pn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Ba{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Yr=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var al=class al{constructor(t,e,i,s,r,o,a,l,c,p,d,h,g,_,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,p,d,h,g,_,y,x)}set(t,e,i,s,r,o,a,l,c,p,d,h,g,_,y,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=p,m[10]=d,m[14]=h,m[3]=g,m[7]=_,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new al().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),p=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*p,g=o*d,_=a*p,y=a*d;e[0]=l*p,e[4]=-l*d,e[8]=c,e[1]=g+_*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*p,g=l*d,_=c*p,y=c*d;e[0]=h+y*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*d,e[5]=o*p,e[9]=-a,e[2]=g*a-_,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*p,g=l*d,_=c*p,y=c*d;e[0]=h-y*a,e[4]=-o*d,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*p,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*p,g=o*d,_=a*p,y=a*d;e[0]=l*p,e[4]=_*c-g,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*p,e[4]=y-h*d,e[8]=_*d+g,e[1]=d,e[5]=o*p,e[9]=-a*p,e[2]=-c*p,e[6]=g*d+_,e[10]=h-y*d}else if(t.order==="XZY"){let h=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*p,e[4]=-d,e[8]=c*p,e[1]=h*d+y,e[5]=o*p,e[9]=g*d-_,e[2]=_*d-g,e[6]=a*p,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G0,t,H0)}lookAt(t,e,i){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),qi.crossVectors(i,Nn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),qi.crossVectors(i,Nn)),qi.normalize(),$o.crossVectors(Nn,qi),s[0]=qi.x,s[4]=$o.x,s[8]=Nn.x,s[1]=qi.y,s[5]=$o.y,s[9]=Nn.y,s[2]=qi.z,s[6]=$o.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],p=i[1],d=i[5],h=i[9],g=i[13],_=i[2],y=i[6],x=i[10],m=i[14],T=i[3],L=i[7],b=i[11],A=i[15],C=s[0],N=s[4],M=s[8],E=s[12],I=s[1],z=s[5],q=s[9],k=s[13],O=s[2],V=s[6],K=s[10],J=s[14],nt=s[3],$=s[7],Q=s[11],st=s[15];return r[0]=o*C+a*I+l*O+c*nt,r[4]=o*N+a*z+l*V+c*$,r[8]=o*M+a*q+l*K+c*Q,r[12]=o*E+a*k+l*J+c*st,r[1]=p*C+d*I+h*O+g*nt,r[5]=p*N+d*z+h*V+g*$,r[9]=p*M+d*q+h*K+g*Q,r[13]=p*E+d*k+h*J+g*st,r[2]=_*C+y*I+x*O+m*nt,r[6]=_*N+y*z+x*V+m*$,r[10]=_*M+y*q+x*K+m*Q,r[14]=_*E+y*k+x*J+m*st,r[3]=T*C+L*I+b*O+A*nt,r[7]=T*N+L*z+b*V+A*$,r[11]=T*M+L*q+b*K+A*Q,r[15]=T*E+L*k+b*J+A*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],p=t[2],d=t[6],h=t[10],g=t[14],_=t[3],y=t[7],x=t[11],m=t[15],T=l*g-c*h,L=a*g-c*d,b=a*h-l*d,A=o*g-c*p,C=o*h-l*p,N=o*d-a*p;return e*(y*T-x*L+m*b)-i*(_*T-x*A+m*C)+s*(_*L-y*A+m*N)-r*(_*b-y*C+x*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],p=t[10];return e*(o*p-a*c)-i*(r*p-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8],d=t[9],h=t[10],g=t[11],_=t[12],y=t[13],x=t[14],m=t[15],T=e*a-i*o,L=e*l-s*o,b=e*c-r*o,A=i*l-s*a,C=i*c-r*a,N=s*c-r*l,M=p*y-d*_,E=p*x-h*_,I=p*m-g*_,z=d*x-h*y,q=d*m-g*y,k=h*m-g*x,O=T*k-L*q+b*z+A*I-C*E+N*M;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/O;return t[0]=(a*k-l*q+c*z)*V,t[1]=(s*q-i*k-r*z)*V,t[2]=(y*N-x*C+m*A)*V,t[3]=(h*C-d*N-g*A)*V,t[4]=(l*I-o*k-c*E)*V,t[5]=(e*k-s*I+r*E)*V,t[6]=(x*b-_*N-m*L)*V,t[7]=(p*N-h*b+g*L)*V,t[8]=(o*q-a*I+c*M)*V,t[9]=(i*I-e*q-r*M)*V,t[10]=(_*C-y*b+m*T)*V,t[11]=(d*b-p*C-g*T)*V,t[12]=(a*E-o*z-l*M)*V,t[13]=(e*z-i*E+s*M)*V,t[14]=(y*L-_*A-x*T)*V,t[15]=(p*A-d*L+h*T)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,p=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,p*a+i,p*l-s*o,0,c*l-s*a,p*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,p=o+o,d=a+a,h=r*c,g=r*p,_=r*d,y=o*p,x=o*d,m=a*d,T=l*c,L=l*p,b=l*d,A=i.x,C=i.y,N=i.z;return s[0]=(1-(y+m))*A,s[1]=(g+b)*A,s[2]=(_-L)*A,s[3]=0,s[4]=(g-b)*C,s[5]=(1-(h+m))*C,s[6]=(x+T)*C,s[7]=0,s[8]=(_+L)*N,s[9]=(x-T)*N,s[10]=(1-(h+y))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,p=1/a,d=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=p,jn.elements[5]*=p,jn.elements[6]*=p,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,e.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ni,l=!1){let c=this.elements,p=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),g=(i+s)/(i-s),_,y;if(l)_=r/(o-r),y=o*r/(o-r);else if(a===ni)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Wr)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ni,l=!1){let c=this.elements,p=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),g=-(i+s)/(i-s),_,y;if(l)_=1/(o-r),y=o/(o-r);else if(a===ni)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===Wr)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};al.prototype.isMatrix4=!0;var qe=al,Us=new Z,jn=new qe,G0=new Z(0,0,0),H0=new Z(1,1,1),qi=new Z,$o=new Z,Nn=new Z,Wf=new qe,Xf=new yi,ji=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],p=s[9],d=s[2],h=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,g),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},W0=0,qf=new Z,Fs=new yi,Pi=new qe,Zo=new Z,Dr=new Z,X0=new Z,q0=new yi,Yf=new Z(1,0,0),$f=new Z(0,1,0),Zf=new Z(0,0,1),Jf={type:"added"},Y0={type:"removed"},Os={type:"childadded",child:null},Gc={type:"childremoved",child:null},Tn=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Z,e=new ji,i=new yi,s=new Z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new de}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(Yf,t)}rotateY(t){return this.rotateOnAxis($f,t)}rotateZ(t){return this.rotateOnAxis(Zf,t)}translateOnAxis(t,e){return qf.copy(t).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yf,t)}translateY(t){return this.translateOnAxis($f,t)}translateZ(t){return this.translateOnAxis(Zf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zo.copy(t):Zo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Dr,Zo,this.up):Pi.lookAt(Zo,Dr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jf),Os.child=t,this.dispatchEvent(Os),Os.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Y0),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jf),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,X0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),p=o(t.images),d=o(t.shapes),h=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let p=a[c];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tn.DEFAULT_UP=new Z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$0={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,i),m=this._getHandJoint(c,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=p.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Hc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=B0(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let i=Jd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Se.workingToColorSpace(xn.copy(this),t),Math.round(Ae(xn.r*255,0,255))*65536+Math.round(Ae(xn.g*255,0,255))*256+Math.round(Ae(xn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(xn.copy(this),e);let i=xn.r,s=xn.g,r=xn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,p=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=p<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=p,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=nn){Se.workingToColorSpace(xn.copy(this),t);let e=xn.r,i=xn.g,s=xn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Jo);let i=Oc(Yi.h,Jo.h,e),s=Oc(Yi.s,Jo.s,e),r=Oc(Yi.l,Jo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new le;le.NAMES=Jd;var Zr=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new Z,Li=new Z,Wc=new Z,Di=new Z,Bs=new Z,zs=new Z,Kf=new Z,Xc=new Z,qc=new Z,Yc=new Z,$c=new Ze,Zc=new Ze,Jc=new Ze,mi=class n{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qn.subVectors(s,e),Li.subVectors(i,e),Wc.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Li),l=Qn.dot(Wc),c=Li.dot(Li),p=Li.dot(Wc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,g=(c*l-a*p)*h,_=(o*p-a*l)*h;return r.set(1-g-_,_,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $c.setScalar(0),Zc.setScalar(0),Jc.setScalar(0),$c.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,i),Jc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($c,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(t,e,i,s){return Qn.subVectors(i,e),Li.subVectors(t,e),Qn.cross(Li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Qn.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,i),zs.subVectors(r,i),Xc.subVectors(t,i);let l=Bs.dot(Xc),c=zs.dot(Xc);if(l<=0&&c<=0)return e.copy(i);qc.subVectors(t,s);let p=Bs.dot(qc),d=zs.dot(qc);if(p>=0&&d<=p)return e.copy(s);let h=l*d-p*c;if(h<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(Bs,o);Yc.subVectors(t,r);let g=Bs.dot(Yc),_=zs.dot(Yc);if(_>=0&&g<=_)return e.copy(r);let y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(zs,a);let x=p*_-g*d;if(x<=0&&d-p>=0&&g-_>=0)return Kf.subVectors(r,s),a=(d-p)/(d-p+(g-_)),e.copy(s).addScaledVector(Kf,a);let m=1/(x+y+h);return o=y*m,a=h*m,e.copy(i).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),jo.subVectors(this.max,Nr),ks.subVectors(t.a,Nr),Vs.subVectors(t.b,Nr),Gs.subVectors(t.c,Nr),$i.subVectors(Vs,ks),Zi.subVectors(Gs,Vs),ms.subVectors(ks,Gs);let e=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-ms.z,ms.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,ms.z,0,-ms.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-ms.y,ms.x,0];return!Kc(e,ks,Vs,Gs,jo)||(e=[1,0,0,0,1,0,0,0,1],!Kc(e,ks,Vs,Gs,jo))?!1:(Qo.crossVectors($i,Zi),e=[Qo.x,Qo.y,Qo.z],Kc(e,ks,Vs,Gs,jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ti=new Z,Ko=new Qi,ks=new Z,Vs=new Z,Gs=new Z,$i=new Z,Zi=new Z,ms=new Z,Nr=new Z,jo=new Z,Qo=new Z,gs=new Z;function Kc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),p=i.dot(gs);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>a)return!1}return!0}var en=new Z,ta=new ve,Z0=0,Je=class extends _i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Kr=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var En=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}},J0=new Qi,Ur=new Z,jc=new Z,ts=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):J0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(jc)),this.expandByPoint(Ur.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},K0=0,Gn=new qe,Qc=new Tn,Hs=new Z,Un=new Qi,Fr=new Qi,cn=new Z,on=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F0(t)?Kr:Jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new de().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Un.min,Fr.min),Un.expandByPoint(cn),cn.addVectors(Un.max,Fr.max),Un.expandByPoint(cn)):(Un.expandByPoint(Fr.min),Un.expandByPoint(Fr.max))}Un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)cn.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),cn.add(Hs)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new Z,l[M]=new Z;let c=new Z,p=new Z,d=new Z,h=new ve,g=new ve,_=new ve,y=new Z,x=new Z;function m(M,E,I){c.fromBufferAttribute(i,M),p.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,E),_.fromBufferAttribute(r,I),p.sub(c),d.sub(c),g.sub(h),_.sub(h);let z=1/(g.x*_.y-_.x*g.y);isFinite(z)&&(y.copy(p).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(z),x.copy(d).multiplyScalar(g.x).addScaledVector(p,-_.x).multiplyScalar(z),a[M].add(y),a[E].add(y),a[I].add(y),l[M].add(x),l[E].add(x),l[I].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let M=0,E=T.length;M<E;++M){let I=T[M],z=I.start,q=I.count;for(let k=z,O=z+q;k<O;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let L=new Z,b=new Z,A=new Z,C=new Z;function N(M){A.fromBufferAttribute(s,M),C.copy(A);let E=a[M];L.copy(E),L.sub(A.multiplyScalar(A.dot(E))).normalize(),b.crossVectors(C,E);let z=b.dot(l[M])<0?-1:1;o.setXYZW(M,L.x,L.y,L.z,z)}for(let M=0,E=T.length;M<E;++M){let I=T[M],z=I.start,q=I.count;for(let k=z,O=z+q;k<O;k+=3)N(t.getX(k+0)),N(t.getX(k+1)),N(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);let s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,p=new Z,d=new Z;if(t)for(let h=0,g=t.count;h<g;h+=3){let _=t.getX(h+0),y=t.getX(h+1),x=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),a.add(p),l.add(p),c.add(p),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,g=e.count;h<g;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,p=a.itemSize,d=a.normalized,h=new c.constructor(l.length*p),g=0,_=0;for(let y=0,x=l.length;y<x;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*p;for(let m=0;m<p;m++)h[_++]=c[g++]}return new Je(h,p,d)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let p=0,d=c.length;p<d;p++){let h=c[p],g=t(h,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],p=[];for(let d=0,h=c.length;d<h;d++){let g=c[d];p.push(g.toJSON(t.data))}p.length>0&&(s[l]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let p=s[c];this.setAttribute(c,p.clone(e))}let r=t.morphAttributes;for(let c in r){let p=[],d=r[c];for(let h=0,g=d.length;h<g;h++)p.push(d[h].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,p=o.length;c<p;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},An=new Z,jr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},th=new Z,j0=new Z,Q0=new de,ei=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=th.subVectors(i,e).cross(j0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Q0.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tg=0,vi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=rr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=yh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ei().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},es=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Or=new Z,Xs=new Z,qs=new Z,Ys=new ve,Br=new ve,Kd=new qe,ea=new Z,zr=new Z,na=new Z,jf=new ve,eh=new ve,Qf=new ve,vs=class extends Tn{constructor(t=new es){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new on;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ka(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new jr(i,3,0,!1)),Ws.setAttribute("uv",new jr(i,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ia(ea.set(-.5,-.5,0),qs,o,Xs,s,r),ia(zr.set(.5,-.5,0),qs,o,Xs,s,r),ia(na.set(.5,.5,0),qs,o,Xs,s,r),jf.set(0,0),eh.set(1,0),Qf.set(1,1);let a=t.ray.intersectTriangle(ea,zr,na,!1,Or);if(a===null&&(ia(zr.set(-.5,.5,0),qs,o,Xs,s,r),eh.set(0,1),a=t.ray.intersectTriangle(ea,na,zr,!1,Or),a===null))return;let l=t.ray.origin.distanceTo(Or);l<t.near||l>t.far||e.push({distance:l,point:Or.clone(),uv:mi.getInterpolation(Or,ea,zr,na,jf,eh,Qf,new ve),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ia(n,t,e,i,s,r){Ys.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Br.x=r*Ys.x-s*Ys.y,Br.y=s*Ys.x+r*Ys.y):Br.copy(Ys),n.copy(t),n.x+=Br.x,n.y+=Br.y,n.applyMatrix4(Kd)}var Ui=new Z,nh=new Z,sa=new Z,ra=new Z,nr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nh.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),ra.copy(this.origin).sub(nh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sa),a=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),p=Math.abs(1-o*o),d,h,g,_;if(p>0)if(d=o*l-a,h=o*a-l,_=r*p,d>=0)if(h>=-_)if(h<=_){let y=1/p;d*=y,h*=y,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(nh).addScaledVector(sa,h),g}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),p>=0?(r=(t.min.y-h.y)*p,o=(t.max.y-h.y)*p):(r=(t.max.y-h.y)*p,o=(t.min.y-h.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,p=a.z,d=t.x-o.x,h=t.y-o.y,g=t.z-o.z,_=e.x-o.x,y=e.y-o.y,x=e.z-o.z,m=i.x-o.x,T=i.y-o.y,L=i.z-o.z,b=Math.abs(l),A=Math.abs(c),C=Math.abs(p),N,M,E,I,z,q,k,O,V,K,J,nt;if(b>=A&&b>=C?(E=l,q=d,V=_,nt=m,l>=0?(N=c,M=p,I=h,z=g,k=y,O=x,K=T,J=L):(N=p,M=c,I=g,z=h,k=x,O=y,K=L,J=T)):A>=C?(E=c,q=h,V=y,nt=T,c>=0?(N=p,M=l,I=g,z=d,k=x,O=_,K=L,J=m):(N=l,M=p,I=d,z=g,k=_,O=x,K=m,J=L)):(E=p,q=g,V=x,nt=L,p>=0?(N=l,M=c,I=d,z=h,k=_,O=y,K=m,J=T):(N=c,M=l,I=h,z=d,k=y,O=_,K=T,J=m)),E===0)return null;let $=N/E,Q=M/E,st=1/E,mt=I-$*q,xt=z-Q*q,bt=k-$*V,wt=O-Q*V,yt=K-$*nt,B=J-Q*nt,it=yt*wt-B*bt,pt=mt*B-xt*yt,Lt=bt*xt-wt*mt;if(s){if(it<0||pt<0||Lt<0)return null}else if((it<0||pt<0||Lt<0)&&(it>0||pt>0||Lt>0))return null;let dt=it+pt+Lt;if(dt===0)return null;let Vt=st*(it*q+pt*V+Lt*nt);return(dt>0?Vt<0:Vt>0)?null:this.at(Vt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},td=new qe,xs=new nr,oa=new ts,ed=new Z,aa=new Z,la=new Z,ca=new Z,ih=new Z,ha=new Z,nd=new Z,ua=new Z,Oe=class extends Tn{constructor(t=new on,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let p=a[l],d=r[l];p!==0&&(ih.fromBufferAttribute(d,t),o?ha.addScaledVector(ih,p):ha.addScaledVector(ih.sub(e),p))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),xs.copy(t.ray).recast(t.near),!(oa.containsPoint(xs.origin)===!1&&(xs.intersectSphere(oa,ed)===null||xs.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),xs.copy(t.ray).applyMatrix4(td),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,d=r.attributes.normal,h=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){let x=h[_],m=o[x.materialIndex],T=Math.max(x.start,g.start),L=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,A=L;b<A;b+=3){let C=a.getX(b),N=a.getX(b+1),M=a.getX(b+2);s=fa(this,m,t,i,c,p,d,C,N,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let x=_,m=y;x<m;x+=3){let T=a.getX(x),L=a.getX(x+1),b=a.getX(x+2);s=fa(this,o,t,i,c,p,d,T,L,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){let x=h[_],m=o[x.materialIndex],T=Math.max(x.start,g.start),L=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,A=L;b<A;b+=3){let C=b,N=b+1,M=b+2;s=fa(this,m,t,i,c,p,d,C,N,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let x=_,m=y;x<m;x+=3){let T=x,L=x+1,b=x+2;s=fa(this,o,t,i,c,p,d,T,L,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function eg(n,t,e,i,s,r,o,a){let l;if(t.side===Cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===os,a),l===null)return null;ua.copy(a),ua.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:n}}function fa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,aa),n.getVertexPosition(l,la),n.getVertexPosition(c,ca);let p=eg(n,t,e,i,aa,la,ca,nd);if(p){let d=new Z;mi.getBarycoord(nd,aa,la,ca,d),s&&(p.uv=mi.getInterpolatedAttribute(s,a,l,c,d,new ve)),r&&(p.uv1=mi.getInterpolatedAttribute(r,a,l,c,d,new ve)),o&&(p.normal=mi.getInterpolatedAttribute(o,a,l,c,d,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new Z,materialIndex:0};mi.getNormal(aa,la,ca,h.normal),p.face=h,p.barycoord=d}return p}var Va=class extends pn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=hn,p=hn,d,h){super(null,o,a,l,c,p,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _s=new ts,ng=new ve(.5,.5),da=new Z,Qr=class{constructor(t=new ei,e=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],p=r[4],d=r[5],h=r[6],g=r[7],_=r[8],y=r[9],x=r[10],m=r[11],T=r[12],L=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,g-p,m-_,A-T).normalize(),s[1].setComponents(c+o,g+p,m+_,A+T).normalize(),s[2].setComponents(c+a,g+d,m+y,A+L).normalize(),s[3].setComponents(c-a,g-d,m-y,A-L).normalize(),i)s[4].setComponents(l,h,x,b).normalize(),s[5].setComponents(c-l,g-h,m-x,A-b).normalize();else if(s[4].setComponents(c-l,g-h,m-x,A-b).normalize(),e===ni)s[5].setComponents(c+l,g+h,m+x,A+b).normalize();else if(e===Wr)s[5].setComponents(l,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);let e=ng.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ms=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new Z,Ha=new Z,id=new qe,kr=new nr,pa=new ts,sh=new Z,sd=new Z,Wa=class extends Tn{constructor(t=new on,e=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Ha);t.setAttribute("lineDistance",new En(i,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;id.copy(s).invert(),kr.copy(t.ray).applyMatrix4(id);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,p=i.index,h=i.attributes.position;if(p!==null){let g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let y=g,x=_-1;y<x;y+=c){let m=p.getX(y),T=p.getX(y+1),L=ma(this,t,kr,l,m,T,y);L&&e.push(L)}if(this.isLineLoop){let y=p.getX(_-1),x=p.getX(g),m=ma(this,t,kr,l,y,x,_-1);m&&e.push(m)}}else{let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=g,x=_-1;y<x;y+=c){let m=ma(this,t,kr,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=ma(this,t,kr,l,_-1,g,_-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ma(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Ga.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),e.distanceSqToSegment(Ga,Ha,sh,sd)>i)return;sh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(sh);if(!(c<t.near||c>t.far))return{distance:c,point:sd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var rd=new Z,od=new Z,bs=class extends Wa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)rd.fromBufferAttribute(e,s),od.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+rd.distanceTo(od);t.setAttribute("lineDistance",new En(i,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ir=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ad=new qe,uh=new nr,ga=new ts,xa=new Z,to=class extends Tn{constructor(t=new on,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;ad.copy(s).invert(),uh.copy(t.ray).applyMatrix4(ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,y=g;_<y;_++){let x=c.getX(_);xa.fromBufferAttribute(d,x),ld(xa,x,l,s,t,e,this)}}else{let h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,y=g;_<y;_++)xa.fromBufferAttribute(d,_),ld(xa,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ld(n,t,e,i,s,r,o){let a=uh.distanceSqToPoint(n);if(a<e){let l=new Z;uh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var eo=class extends pn{constructor(t=[],e=as,i,s,r,o,a,l,c,p){super(t,e,i,s,r,o,a,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hn=class extends pn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends pn{constructor(t,e,i=si,s,r,o,a=hn,l=hn,c,p=xi,d=1){if(p!==xi&&p!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xa=class extends ns{constructor(t,e=si,i=as,s,r,o=hn,a=hn,l,c=xi){let p={width:t,height:t,depth:1},d=[p,p,p,p,p,p];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qe=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],p=[],d=[],h=0,g=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(d,2));function _(y,x,m,T,L,b,A,C,N,M,E){let I=b/N,z=A/M,q=b/2,k=A/2,O=C/2,V=N+1,K=M+1,J=0,nt=0,$=new Z;for(let Q=0;Q<K;Q++){let st=Q*z-k;for(let mt=0;mt<V;mt++){let xt=mt*I-q;$[y]=xt*T,$[x]=st*L,$[m]=O,c.push($.x,$.y,$.z),$[y]=0,$[x]=0,$[m]=C>0?1:-1,p.push($.x,$.y,$.z),d.push(mt/N),d.push(1-Q/M),J+=1}}for(let Q=0;Q<M;Q++)for(let st=0;st<N;st++){let mt=h+st+V*Q,xt=h+st+V*(Q+1),bt=h+(st+1)+V*(Q+1),wt=h+(st+1)+V*Q;l.push(mt,xt,wt),l.push(xt,bt,wt),nt+=6}a.addGroup(g,nt,E),g+=nt,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _a=new Z,ya=new Z,rh=new Z,va=new mi,io=class extends on{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Aa*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],p=["a","b","c"],d=new Array(3),h={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:y,b:x,c:m}=va;if(y.fromBufferAttribute(a,c[0]),x.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),va.getNormal(rh),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let L=(T+1)%3,b=d[T],A=d[L],C=va[p[T]],N=va[p[L]],M=`${b}_${A}`,E=`${A}_${b}`;E in h&&h[E]?(rh.dot(h[E].normal)<=r&&(g.push(C.x,C.y,C.z),g.push(N.x,N.y,N.z)),h[E]=null):M in h||(h[M]={index0:c[T],index1:c[L],normal:rh.clone()})}}for(let _ in h)if(h[_]){let{index0:y,index1:x}=h[_];_a.fromBufferAttribute(a,y),ya.fromBufferAttribute(a,x),g.push(_a.x,_a.y,_a.z),g.push(ya.x,ya.y,ya.z)}this.setAttribute("position",new En(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var so=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,p=l+1,d=t/a,h=e/l,g=[],_=[],y=[],x=[];for(let m=0;m<p;m++){let T=m*h-o;for(let L=0;L<c;L++){let b=L*d-r;_.push(b,-T,0),y.push(0,0,1),x.push(L/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let L=T+c*m,b=T+c*(m+1),A=T+1+c*(m+1),C=T+1+c*m;g.push(L,b,C),g.push(b,A,C)}this.setIndex(g),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(y,3)),this.setAttribute("uv",new En(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function As(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(cd(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(cd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=As(n[e]);for(let s in i)t[s]=i[s]}return t}function cd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ig(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var jd={clone:As,merge:Mn},sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=ig(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new de().fromArray(s.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qa=class extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ya=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$a=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function oh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var is=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends is{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:r=t,a=2*e-i;break;case hh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:o=t,l=2*i-e;break;case hh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,p=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,p=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,g=this._weightNext,_=(i-e)/(s-e),y=_*_,x=y*_,m=-h*x+2*h*y-h*_,T=(1+h)*x+(-1.5-2*h)*y+(-.5+h)*_+1,L=(-1-g)*x+(1.5+g)*y+.5*_,b=g*x-g*y;for(let A=0;A!==a;++A)r[A]=m*o[p+A]+T*o[c+A]+L*o[l+A]+b*o[d+A];return r}},Ja=class extends is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,p=(i-e)/(s-e),d=1-p;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*p;return r}},Ka=class extends is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ja=class extends is{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,p=this.inTangents,d=this.outTangents;if(!p||!d){let _=(i-e)/(s-e),y=1-_;for(let x=0;x!==a;++x)r[x]=o[c+x]*y+o[l+x]*_;return r}let h=a*2,g=t-1;for(let _=0;_!==a;++_){let y=o[c+_],x=o[l+_],m=g*h+_*2,T=d[m],L=d[m+1],b=t*h+_*2,A=p[b],C=p[b+1],N=ag(i,e,T,A,s);r[_]=Qd(N,y,L,C,x)}return r}};function Qd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function og(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ag(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Qd(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=og(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),oh(t.settings)&&(i.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return re("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;oh(this.settings)&&(hd(this.settings.inTangents,t),hd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ae("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ae("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&O0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ae("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],p=t[a+1];if(c!==p&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,h=d-i,g=d+i;for(let _=0;_!==i;++_){let y=e[d+_];if(y!==e[h+_]||y!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,h=o*i;for(let g=0;g!==i;++g)e[h+g]=e[d+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,oh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ua;var ss=class extends Fn{constructor(t,e,i){super(t,e,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Vr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};Qa.prototype.ValueTypeName="color";var tl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};tl.prototype.ValueTypeName="number";var el=class extends is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let p=c+a;c!==p;c+=4)yi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ro=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Fn{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Vr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};nl.prototype.ValueTypeName="vector";var il=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,d){return c.push(p,d),this},this.removeHandler=function(p){let d=c.indexOf(p);return d!==-1&&c.splice(d,2),this},this.getHandler=function(p){for(let d=0,h=c.length;d<h;d+=2){let g=c[d],_=c[d+1];if(g.global&&(g.lastIndex=0),g.test(p))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tp=new il,sl=class{constructor(t){this.manager=t!==void 0?t:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ma=new Z,ba=new yi,di=new Z,oo=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,ba,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,ba,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ma,ba,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,ba,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new Z,ud=new ve,fd=new ve,_n=class extends oo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,ud,fd),e.subVectors(fd,ud)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ao=class extends oo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Zs=-90,Js=1,rl=class extends Tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Zs,Js,t,e);s.layers=this.layers,this.add(s);let r=new _n(Zs,Js,t,e);r.layers=this.layers,this.add(r);let o=new _n(Zs,Js,t,e);o.layers=this.layers,this.add(o);let a=new _n(Zs,Js,t,e);a.layers=this.layers,this.add(a);let l=new _n(Zs,Js,t,e);l.layers=this.layers,this.add(l);let c=new _n(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,p]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(d,h,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ol=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kh="\\[\\]\\.:\\/",lg=new RegExp("["+kh+"]","g"),Vh="[^"+kh+"]",cg="[^"+kh.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Vh),ug=/(WCOD+)?/.source.replace("WCOD",cg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),pg=new RegExp("^"+hg+ug+fg+dg+"$"),mg=["material","materials","bones","map"],fh=class{constructor(t,e,i){let s=i||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},He=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(t){let e=pg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===c){c=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=fh;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ib=new Float32Array(1);var Yh=class Yh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Yh.prototype.isMatrix2=!0;var dh=Yh;function Gh(n,t,e,i){let s=gg(i);switch(e){case Dh:return n*t;case Uh:return n*t/s.components*s.byteLength;case pl:return n*t/s.components*s.byteLength;case hs:return n*t*2/s.components*s.byteLength;case ml:return n*t*2/s.components*s.byteLength;case Nh:return n*t*3/s.components*s.byteLength;case Xn:return n*t*4/s.components*s.byteLength;case gl:return n*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case vl:return Math.max(n,16)*Math.max(t,8)/4;case xl:case yl:return Math.max(n,8)*Math.max(t,8)/2;case Ml:case bl:case wl:case Al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:case go:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Vl:case Gl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xo:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(n){switch(n){case On:case Rh:return{byteLength:1,components:1};case or:case Ih:case oi:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case si:case ul:case ri:return{byteLength:4,components:1};case Ph:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _g(n){let t=new WeakMap;function e(a,l){let c=a.array,p=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,p),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let p=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,p);else{d.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<d.length;g++){let _=d[h],y=d[g];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,d[h]=y)}d.length=h+1;for(let g=0,_=d.length;g<_;g++){let y=d[g];n.bufferSubData(c,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:yg,alphahash_pars_fragment:vg,alphamap_fragment:Mg,alphamap_pars_fragment:bg,alphatest_fragment:Sg,alphatest_pars_fragment:wg,aomap_fragment:Ag,aomap_pars_fragment:Eg,batching_pars_vertex:Tg,batching_vertex:Cg,begin_vertex:Rg,beginnormal_vertex:Ig,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:zg,color_pars_vertex:kg,color_vertex:Vg,common:Gg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:$g,colorspace_fragment:Zg,colorspace_pars_fragment:Jg,envmap_fragment:Kg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Qg,envmap_pars_vertex:tx,envmap_physical_pars_fragment:ux,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:hx,lights_toon_fragment:fx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:_x,lights_fragment_maps:yx,lights_fragment_end:vx,lightprobes_pars_fragment:Mx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ax,map_fragment:Ex,map_pars_fragment:Tx,map_particle_fragment:Cx,map_particle_pars_fragment:Rx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Px,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:Bx,normal_pars_fragment:zx,normal_pars_vertex:kx,normal_vertex:Vx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:$x,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Kx,dithering_pars_fragment:jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:o_,skinning_vertex:a_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:f_,transmission_fragment:d_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:x_,worldpos_vertex:__,background_vert:y_,background_frag:v_,backgroundCube_vert:M_,backgroundCube_frag:b_,cube_vert:S_,cube_frag:w_,depth_vert:A_,depth_frag:E_,distance_vert:T_,distance_frag:C_,equirect_vert:R_,equirect_frag:I_,linedashed_vert:P_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:N_,meshlambert_vert:U_,meshlambert_frag:F_,meshmatcap_vert:O_,meshmatcap_frag:B_,meshnormal_vert:z_,meshnormal_frag:k_,meshphong_vert:V_,meshphong_frag:G_,meshphysical_vert:H_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:q_,points_vert:Y_,points_frag:$_,shadow_vert:Z_,shadow_frag:J_,sprite_vert:K_,sprite_frag:j_},Ft={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Si={basic:{uniforms:Mn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Mn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Mn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Mn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Mn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new le(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Mn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Mn([Ft.points,Ft.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Mn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Mn([Ft.common,Ft.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Mn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Mn([Ft.sprite,Ft.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Mn([Ft.common,Ft.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Mn([Ft.lights,Ft.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Si.physical={uniforms:Mn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var Zl={r:0,b:0,g:0},Q_=new qe,Sp=new de;Sp.set(-1,0,0,0,1,0,0,0,1);function ty(n,t,e,i,s,r){let o=new le(0),a=s===!0?0:1,l,c,p=null,d=0,h=null;function g(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){let b=T.backgroundBlurriness>0;L=t.get(L,b)}return L}function _(T){let L=!1,b=g(T);b===null?x(o,a):b&&b.isColor&&(x(b,1),L=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,L){let b=g(L);b&&(b.isCubeTexture||b.mapping===co)?(c===void 0&&(c=new Oe(new Qe(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:As(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sp),c.material.toneMapped=Se.getTransfer(b.colorSpace)!==De,(p!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,p=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Oe(new so(2,2),new vn({name:"BackgroundMaterial",uniforms:As(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=Se.getTransfer(b.colorSpace)!==De,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||d!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,p=b,d=b.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function x(T,L){T.getRGB(Zl,zh(n)),e.buffers.color.setClear(Zl.r,Zl.g,Zl.b,L,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,L=1){o.set(T),a=L,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,x(o,a)},render:_,addToRenderList:y,dispose:m}}function ey(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(z,q,k,O,V){let K=!1,J=d(z,O,k,q);r!==J&&(r=J,c(r.object)),K=g(z,O,k,V),K&&_(z,O,k,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,b(z,q,k,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(z){return n.bindVertexArray(z)}function p(z){return n.deleteVertexArray(z)}function d(z,q,k,O){let V=O.wireframe===!0,K=i[q.id];K===void 0&&(K={},i[q.id]=K);let J=z.isInstancedMesh===!0?z.id:0,nt=K[J];nt===void 0&&(nt={},K[J]=nt);let $=nt[k.id];$===void 0&&($={},nt[k.id]=$);let Q=$[V];return Q===void 0&&(Q=h(l()),$[V]=Q),Q}function h(z){let q=[],k=[],O=[];for(let V=0;V<e;V++)q[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:k,attributeDivisors:O,object:z,attributes:{},index:null}}function g(z,q,k,O){let V=r.attributes,K=q.attributes,J=0,nt=k.getAttributes();for(let $ in nt)if(nt[$].location>=0){let st=V[$],mt=K[$];if(mt===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(mt=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(mt=z.instanceColor)),st===void 0||st.attribute!==mt||mt&&st.data!==mt.data)return!0;J++}return r.attributesNum!==J||r.index!==O}function _(z,q,k,O){let V={},K=q.attributes,J=0,nt=k.getAttributes();for(let $ in nt)if(nt[$].location>=0){let st=K[$];st===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(st=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(st=z.instanceColor));let mt={};mt.attribute=st,st&&st.data&&(mt.data=st.data),V[$]=mt,J++}r.attributes=V,r.attributesNum=J,r.index=O}function y(){let z=r.newAttributes;for(let q=0,k=z.length;q<k;q++)z[q]=0}function x(z){m(z,0)}function m(z,q){let k=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;k[z]=1,O[z]===0&&(n.enableVertexAttribArray(z),O[z]=1),V[z]!==q&&(n.vertexAttribDivisor(z,q),V[z]=q)}function T(){let z=r.newAttributes,q=r.enabledAttributes;for(let k=0,O=q.length;k<O;k++)q[k]!==z[k]&&(n.disableVertexAttribArray(k),q[k]=0)}function L(z,q,k,O,V,K,J){J===!0?n.vertexAttribIPointer(z,q,k,V,K):n.vertexAttribPointer(z,q,k,O,V,K)}function b(z,q,k,O){y();let V=O.attributes,K=k.getAttributes(),J=q.defaultAttributeValues;for(let nt in K){let $=K[nt];if($.location>=0){let Q=V[nt];if(Q===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),Q!==void 0){let st=Q.normalized,mt=Q.itemSize,xt=t.get(Q);if(xt===void 0)continue;let bt=xt.buffer,wt=xt.type,yt=xt.bytesPerElement,B=wt===n.INT||wt===n.UNSIGNED_INT||Q.gpuType===ul;if(Q.isInterleavedBufferAttribute){let it=Q.data,pt=it.stride,Lt=Q.offset;if(it.isInstancedInterleavedBuffer){for(let dt=0;dt<$.locationSize;dt++)m($.location+dt,it.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<$.locationSize;dt++)x($.location+dt);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let dt=0;dt<$.locationSize;dt++)L($.location+dt,mt/$.locationSize,wt,st,pt*yt,(Lt+mt/$.locationSize*dt)*yt,B)}else{if(Q.isInstancedBufferAttribute){for(let it=0;it<$.locationSize;it++)m($.location+it,Q.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let it=0;it<$.locationSize;it++)x($.location+it);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let it=0;it<$.locationSize;it++)L($.location+it,mt/$.locationSize,wt,st,mt*yt,mt/$.locationSize*it*yt,B)}}else if(J!==void 0){let st=J[nt];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv($.location,st);break;case 3:n.vertexAttrib3fv($.location,st);break;case 4:n.vertexAttrib4fv($.location,st);break;default:n.vertexAttrib1fv($.location,st)}}}}T()}function A(){E();for(let z in i){let q=i[z];for(let k in q){let O=q[k];for(let V in O){let K=O[V];for(let J in K)p(K[J].object),delete K[J];delete O[V]}}delete i[z]}}function C(z){if(i[z.id]===void 0)return;let q=i[z.id];for(let k in q){let O=q[k];for(let V in O){let K=O[V];for(let J in K)p(K[J].object),delete K[J];delete O[V]}}delete i[z.id]}function N(z){for(let q in i){let k=i[q];for(let O in k){let V=k[O];if(V[z.id]===void 0)continue;let K=V[z.id];for(let J in K)p(K[J].object),delete K[J];delete V[z.id]}}}function M(z){for(let q in i){let k=i[q],O=z.isInstancedMesh===!0?z.id:0,V=k[O];if(V!==void 0){for(let K in V){let J=V[K];for(let nt in J)p(J[nt].object),delete J[nt];delete V[K]}delete k[O],Object.keys(k).length===0&&delete i[q]}}}function E(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function ny(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,p){p!==0&&(n.drawArraysInstanced(i,l,c,p),e.update(c,i,p))}function a(l,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let h=0;for(let g=0;g<p;g++)h+=c[g];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function iy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Xn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let M=N===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==On&&N!==ri&&!M&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",p=l(c);p!==c&&(re("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:b,maxSamples:A,samples:C}}function sy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ei,a=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let g=d.length!==0||h||i!==0||s;return s=h,i=d.length,g},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=p(d,h,0)},this.setState=function(d,h,g){let _=d.clippingPlanes,y=d.clipIntersection,x=d.clipShadows,m=n.get(d);if(!s||_===null||_.length===0||r&&!x)r?p(null):c();else{let T=r?0:i,L=T*4,b=m.clippingState||null;l.value=b,b=p(_,h,L,g);for(let A=0;A!==L;++A)b[A]=e[A];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(d,h,g,_){let y=d!==null?d.length:0,x=null;if(y!==0){if(x=l.value,_!==!0||x===null){let m=g+y*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<m)&&(x=new Float32Array(m));for(let L=0,b=g;L!==y;++L,b+=4)o.copy(d[L]).applyMatrix4(T,a),o.normal.toArray(x,b),x[b+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}var cr=4,ry=6,oy=20,ay=256,_o=new ao,ep=new le,$h=null,Zh=0,Jh=0,Kh=!1,ly=new Z,Es=new Z,Kl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=ly}=r;$h=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($h,Zh,Jh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:oi,format:Xn,colorSpace:Gr,depthBuffer:!1},s=np(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cy(r)),this._blurMaterial=uy(r,t,e),this._ggxMaterial=hy(r,t,e)}return s}_compileMaterial(t){let e=new Oe(new on,t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,i,s,r){let l=new _n(90,1,e,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,g=d.toneMapping;d.getClearColor(ep),d.toneMapping=ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Qe,new yn({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,x=y.material,m=!1,T=t.background;T?T.isColor&&(x.color.copy(T),t.background=null,m=!0):(x.color.copy(ep),m=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+p[L],r.y,r.z)):b===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+p[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+p[L]));let A=this._cubeSize;lr(s,b*A,L>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(y,l),d.render(t,l)}d.toneMapping=g,d.autoClear=h,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===as||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,_o)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-p*p),h=c*1.25,g=d*h,{_lodMax:_}=this,y=this._sizeLods[i],x=3*y*(i>_-cr?i-_+cr:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,lr(r,x,m,3*y,2*y),s.setRenderTarget(r),s.render(a,_o),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,lr(t,x,m,3*y,2*y),s.setRenderTarget(t),s.render(a,_o)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],d=3*p*(s>this._lodMax-cr?s-this._lodMax+cr:0),h=4*(this._cubeSize-p);lr(e,d,h,3*p,2*p),o.setRenderTarget(e),o.render(l,_o)}};function cy(n){let t=[],e=[],i=n,s=n-cr+1+ry;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,p=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,g=3,_=new Float32Array(g*h*d),y=new Float32Array(g*h*d);for(let m=0;m<d;m++){let T=m%3*2/3-1,L=m>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(b,g*h*m);for(let A=0;A<h;A++){let C=p[A*2]*2-1,N=p[A*2+1]*2-1;m===0?Es.set(1,N,C):m===1?Es.set(-C,1,-N):m===2?Es.set(-C,N,1):m===3?Es.set(-1,N,-C):m===4?Es.set(-C,-1,N):Es.set(C,N,-1),Es.toArray(y,(m*h+A)*g)}}let x=new on;x.setAttribute("position",new Je(_,g)),x.setAttribute("outputDirection",new Je(y,g)),e.push(new Oe(x,null)),i>cr&&i--}return{lodMeshes:e,sizeLods:t}}function np(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hy(n,t,e){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function uy(n,t,e){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:oy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ip(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function sp(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jl=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qe(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new Oe(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=sn),new rl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function fy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,g=!1){return h==null?null:g?o(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===ll||g===cl)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new jl(_.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let g=h.mapping,_=g===ll||g===cl,y=g===as||g===ws;if(_||y){let x=e.get(h),m=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Kl(n)),x=_?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{let T=h.image;return _&&T&&T.height>0||y&&T&&l(T)?(i===null&&(i=new Kl(n)),x=_?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",p),x.texture):null}}}return h}function a(h,g){return g===ll?h.mapping=as:g===cl&&(h.mapping=ws),h}function l(h){let g=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&g++;return g===_}function c(h){let g=h.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function p(h){let g=h.target;g.removeEventListener("dispose",p);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function dy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ys("WebGLRenderer: "+i+" extension not supported."),s}}}function py(n,t,e,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let g=r.get(h);g&&(t.remove(g),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)t.update(h[g],n.ARRAY_BUFFER)}function c(d){let h=[],g=d.index,_=d.attributes.position,y=0;if(_===void 0)return;if(g!==null){let T=g.array;y=g.version;for(let L=0,b=T.length;L<b;L+=3){let A=T[L+0],C=T[L+1],N=T[L+2];h.push(A,C,C,N,N,A)}}else{let T=_.array;y=_.version;for(let L=0,b=T.length/3-1;L<b;L+=3){let A=L+0,C=L+1,N=L+2;h.push(A,C,C,N,N,A)}}let x=new(_.count>=65535?Kr:Jr)(h,1);x.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,x)}function p(d){let h=r.get(d);if(h){let g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:p}}function my(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,d*o,g),e.update(h,i,g))}function p(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,g);let y=0;for(let x=0;x<g;x++)y+=h[x];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function gy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xy(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,l){let c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0,h=i.get(a);if(h===void 0||h.count!==d){let E=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],L=0;g===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let b=a.attributes.position.count*L,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*A*4*d),N=new Yr(C,b,A,d);N.type=ri,N.needsUpdate=!0;let M=L*4;for(let I=0;I<d;I++){let z=x[I],q=m[I],k=T[I],O=b*A*4*I;for(let V=0;V<z.count;V++){let K=V*M;g===!0&&(s.fromBufferAttribute(z,V),C[O+K+0]=s.x,C[O+K+1]=s.y,C[O+K+2]=s.z,C[O+K+3]=0),_===!0&&(s.fromBufferAttribute(q,V),C[O+K+4]=s.x,C[O+K+5]=s.y,C[O+K+6]=s.z,C[O+K+7]=0),y===!0&&(s.fromBufferAttribute(k,V),C[O+K+8]=s.x,C[O+K+9]=s.y,C[O+K+10]=s.z,C[O+K+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:N,size:new ve(b,A)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function _y(n,t,e,i,s){let r=new WeakMap;function o(c){let p=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==p&&(t.update(h),r.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==p&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==p&&(g.update(),r.set(g,p))}return h}function a(){r=new WeakMap}function l(c){let p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:a}}var yy={[Mh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Sh]:"CINEON_TONE_MAPPING",[wh]:"ACES_FILMIC_TONE_MAPPING",[Eh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Ah]:"CUSTOM_TONE_MAPPING"};function vy(n,t,e,i,s,r){let o=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new on;c.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new En([0,2,0,0,2,0],2));let p=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(c,p),h=new ao(-1,1,1,-1,0,1),g=null,_=null,y=!1,x,m=null,T=[],L=!1;this.setSize=function(b,A){o.setSize(b,A),a!==null&&a.setSize(b,A),l!==null&&l.setSize(b,A);for(let C=0;C<T.length;C++){let N=T[C];N.setSize&&N.setSize(b,A)}},this.setEffects=function(b){T=b,L=T.length>0&&T[0].isRenderPass===!0;let A=o.width,C=o.height;T.length>0&&a===null&&(a=new Pn(A,C,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(A,C,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<T.length;N++){let M=T[N];M.setSize&&M.setSize(A,C)}},this.begin=function(b,A){if(y||b.toneMapping===ii&&T.length===0)return!1;if(m=A,A!==null){let C=A.width,N=A.height;(o.width!==C||o.height!==N)&&this.setSize(C,N)}return L===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=ii,!0},this.hasRenderPass=function(){return L},this.end=function(b,A){b.toneMapping=x,y=!0;let C=o,N=a;for(let M=0;M<T.length;M++){let E=T[M];E.enabled!==!1&&(E.render(b,N,C,A),E.needsSwap!==!1&&(C=N,N=N===a?l:a))}if(g!==b.outputColorSpace||_!==b.toneMapping){g=b.outputColorSpace,_=b.toneMapping,p.defines={},Se.getTransfer(g)===De&&(p.defines.SRGB_TRANSFER="");let M=yy[_];M&&(p.defines[M]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(m),b.render(d,h),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),p.dispose()}}var wp=new pn,tu=new ns(1,1),Ap=new Yr,Ep=new za,Tp=new eo,rp=[],op=[],ap=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function ur(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=rp[s];if(r===void 0&&(r=new Float32Array(s),rp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ec(n,t){let e=op[t];e===void 0&&(e=new Int32Array(t),op[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function My(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function by(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function Sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function Ay(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;cp.set(i),n.uniformMatrix2fv(this.addr,!1,cp),ln(e,i)}}function Ey(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;lp.set(i),n.uniformMatrix3fv(this.addr,!1,lp),ln(e,i)}}function Ty(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;ap.set(i),n.uniformMatrix4fv(this.addr,!1,ap),ln(e,i)}}function Cy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function Iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function Py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function Ly(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function Ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function Uy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function Fy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=e.isReversedDepthBuffer()?$l:Yl,r=tu):r=wp,e.setTexture2D(t||r,s)}function Oy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ep,s)}function By(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Tp,s)}function zy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ap,s)}function ky(n){switch(n){case 5126:return My;case 35664:return by;case 35665:return Sy;case 35666:return wy;case 35674:return Ay;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Iy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}function Vy(n,t){n.uniform1fv(this.addr,t)}function Gy(n,t){let e=ur(t,this.size,2);n.uniform2fv(this.addr,e)}function Hy(n,t){let e=ur(t,this.size,3);n.uniform3fv(this.addr,e)}function Wy(n,t){let e=ur(t,this.size,4);n.uniform4fv(this.addr,e)}function Xy(n,t){let e=ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qy(n,t){let e=ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yy(n,t){let e=ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $y(n,t){n.uniform1iv(this.addr,t)}function Zy(n,t){n.uniform2iv(this.addr,t)}function Jy(n,t){n.uniform3iv(this.addr,t)}function Ky(n,t){n.uniform4iv(this.addr,t)}function jy(n,t){n.uniform1uiv(this.addr,t)}function Qy(n,t){n.uniform2uiv(this.addr,t)}function tv(n,t){n.uniform3uiv(this.addr,t)}function ev(n,t){n.uniform4uiv(this.addr,t)}function nv(n,t,e){let i=this.cache,s=t.length,r=ec(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=tu:o=wp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function iv(n,t,e){let i=this.cache,s=t.length,r=ec(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ep,r[o])}function sv(n,t,e){let i=this.cache,s=t.length,r=ec(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tp,r[o])}function rv(n,t,e){let i=this.cache,s=t.length,r=ec(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ap,r[o])}function ov(n){switch(n){case 5126:return Vy;case 35664:return Gy;case 35665:return Hy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return $y;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Ky;case 5125:return jy;case 36294:return Qy;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}var eu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ky(e.type)}},nu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ov(e.type)}},iu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},jh=/(\w+)(\])?(\[|\.)?/g;function hp(n,t){n.seq.push(t),n.map[t.id]=t}function av(n,t,e){let i=n.name,s=i.length;for(jh.lastIndex=0;;){let r=jh.exec(i),o=jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hp(e,c===void 0?new eu(a,n,t):new nu(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new iu(a),hp(e,d)),e=d}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);av(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function up(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var lv=37297,cv=0;function hv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var fp=new de;function uv(n){Se._getMatrix(fp,Se.workingColorSpace,n);let t=`mat3( ${fp.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(n)){case Hr:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hv(n.getShaderSource(t),a)}else return r}function fv(n,t){let e=uv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var dv={[Mh]:"Linear",[bh]:"Reinhard",[Sh]:"Cineon",[wh]:"ACESFilmic",[Eh]:"AgX",[Th]:"Neutral",[Ah]:"Custom"};function pv(n,t){let e=dv[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jl=new Z;function mv(){Se.getLuminanceCoefficients(Jl);let n=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function xv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _v(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vo(n){return n!==""}function pp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(n){return n.replace(yv,Mv)}var vv=new Map;function Mv(n,t){let e=_e[t];if(e===void 0){let i=vv.get(t);if(i!==void 0)e=_e[i],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return su(e)}var bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(n){return n.replace(bv,Sv)}function Sv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var wv={[lo]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Av(n){return wv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ev={[as]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Tv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ev[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Cv={[ws]:"ENVMAP_MODE_REFRACTION"};function Rv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Cv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iv={[vh]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function Pv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Iv[n.combine]||"ENVMAP_BLENDING_NONE"}function Lv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Dv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Av(e),c=Tv(e),p=Rv(e),d=Pv(e),h=Lv(e),g=gv(e),_=xv(r),y=s.createProgram(),x,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(x=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?_e.tonemapping_pars_fragment:"",e.toneMapping!==ii?pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,fv("linearToOutputTexel",e.outputColorSpace),mv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=su(o),o=pp(o,e),o=mp(o,e),a=su(a),a=pp(a,e),a=mp(a,e),o=gp(o),a=gp(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let L=T+x+o,b=T+m+a,A=up(s,s.VERTEX_SHADER,L),C=up(s,s.FRAGMENT_SHADER,b);s.attachShader(y,A),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(z){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(A)||"",O=s.getShaderInfoLog(C)||"",V=q.trim(),K=k.trim(),J=O.trim(),nt=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,A,C);else{let Q=dp(s,A,"vertex"),st=dp(s,C,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+V+`
`+Q+`
`+st)}else V!==""?re("WebGLProgram: Program Info Log:",V):(K===""||J==="")&&($=!1);$&&(z.diagnostics={runnable:nt,programLog:V,vertexShader:{log:K,prefix:x},fragmentShader:{log:J,prefix:m}})}s.deleteShader(A),s.deleteShader(C),M=new hr(s,y),E=_v(s,y)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,lv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}var Nv=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ou(t),e.set(t,i)),i}},ou=class{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}};function Uv(n){return n===hs||n===go||n===xo}function Fv(n,t,e,i,s,r){let o=new $r,a=new ru,l=new Set,c=[],p=new Map,d=i.logarithmicDepthBuffer,h=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function y(M,E,I,z,q,k){let O=z.fog,V=q.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,nt=t.get(M.envMap||K,J),$=nt&&nt.mapping===co?nt.image.height:null,Q=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&re("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let st=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=st!==void 0?st.length:0,xt=0;V.morphAttributes.position!==void 0&&(xt=1),V.morphAttributes.normal!==void 0&&(xt=2),V.morphAttributes.color!==void 0&&(xt=3);let bt,wt,yt,B;if(Q){let Le=Si[Q];bt=Le.vertexShader,wt=Le.fragmentShader}else{bt=M.vertexShader,wt=M.fragmentShader;let Le=a.getVertexShaderStage(M),xe=a.getFragmentShaderStage(M);a.update(M,Le,xe),yt=Le.id,B=xe.id}let it=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Lt=q.isInstancedMesh===!0,dt=q.isBatchedMesh===!0,Vt=!!M.map,Qt=!!M.matcap,Jt=!!nt,ee=!!M.aoMap,ue=!!M.lightMap,Ht=!!M.bumpMap&&M.wireframe===!1,oe=!!M.normalMap,Be=!!M.displacementMap,Ve=!!M.emissiveMap,Te=!!M.metalnessMap,Pe=!!M.roughnessMap,H=M.anisotropy>0,Ge=M.clearcoat>0,Me=M.dispersion>0,D=M.retroreflectivity>0,v=M.iridescence>0,Y=M.sheen>0,et=M.transmission>0,at=H&&!!M.anisotropyMap,Tt=Ge&&!!M.clearcoatMap,It=Ge&&!!M.clearcoatNormalMap,lt=Ge&&!!M.clearcoatRoughnessMap,ft=v&&!!M.iridescenceMap,At=v&&!!M.iridescenceThicknessMap,$t=Y&&!!M.sheenColorMap,Ct=Y&&!!M.sheenRoughnessMap,Et=!!M.specularMap,qt=!!M.specularColorMap,ne=!!M.specularIntensityMap,ce=et&&!!M.transmissionMap,W=et&&!!M.thicknessMap,Rt=!!M.gradientMap,ut=!!M.alphaMap,Pt=M.alphaTest>0,Ot=!!M.alphaHash,gt=!!M.extensions,Zt=ii;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Zt=n.toneMapping);let Yt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:bt,fragmentShader:wt,defines:M.defines,customVertexShaderID:yt,customFragmentShaderID:B,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:dt,batchingColor:dt&&q._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&q.instanceColor!==null,instancingMorph:Lt&&q.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Vt,matcap:Qt,envMap:Jt,envMapMode:Jt&&nt.mapping,envMapCubeUVHeight:$,aoMap:ee,lightMap:ue,bumpMap:Ht,normalMap:oe,displacementMap:Be,emissiveMap:Ve,normalMapObjectSpace:oe&&M.normalMapType===Bd,normalMapTangentSpace:oe&&M.normalMapType===Fh,packedNormalMap:oe&&M.normalMapType===Fh&&Uv(M.normalMap.format),metalnessMap:Te,roughnessMap:Pe,anisotropy:H,anisotropyMap:at,clearcoat:Ge,clearcoatMap:Tt,clearcoatNormalMap:It,clearcoatRoughnessMap:lt,dispersion:Me,retroreflection:D,iridescence:v,iridescenceMap:ft,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:$t,sheenRoughnessMap:Ct,specularMap:Et,specularColorMap:qt,specularIntensityMap:ne,transmission:et,transmissionMap:ce,thicknessMap:W,gradientMap:Rt,opaque:M.transparent===!1&&M.blending===rr&&M.alphaToCoverage===!1,alphaMap:ut,alphaTest:Pt,alphaHash:Ot,combine:M.combine,mapUv:Vt&&_(M.map.channel),aoMapUv:ee&&_(M.aoMap.channel),lightMapUv:ue&&_(M.lightMap.channel),bumpMapUv:Ht&&_(M.bumpMap.channel),normalMapUv:oe&&_(M.normalMap.channel),displacementMapUv:Be&&_(M.displacementMap.channel),emissiveMapUv:Ve&&_(M.emissiveMap.channel),metalnessMapUv:Te&&_(M.metalnessMap.channel),roughnessMapUv:Pe&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:Tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:Et&&_(M.specularMap.channel),specularColorMapUv:qt&&_(M.specularColorMap.channel),specularIntensityMapUv:ne&&_(M.specularIntensityMap.channel),transmissionMapUv:ce&&_(M.transmissionMap.channel),thicknessMapUv:W&&_(M.thicknessMap.channel),alphaMapUv:ut&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(oe||H),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(Vt||ut),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&oe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:xt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Vt&&M.map.isVideoTexture===!0&&Se.getTransfer(M.map.colorSpace)===De,decodeVideoTextureEmissive:Ve&&M.emissiveMap.isVideoTexture===!0&&Se.getTransfer(M.emissiveMap.colorSpace)===De,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:gt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&M.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(m(E,M),T(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function m(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function T(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function L(M){let E=g[M.type],I;if(E){let z=Si[E];I=jd.clone(z.uniforms)}else I=M.uniforms;return I}function b(M,E){let I=p.get(E);return I!==void 0?++I.usedTimes:(I=new Dv(n,E,M,s),c.push(I),p.set(E,I)),I}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),p.delete(M.cacheKey),M.destroy()}}function C(M){a.remove(M)}function N(){a.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:N}}function Ov(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Bv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function _p(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function a(h,g,_,y,x,m){let T=n[t];return T===void 0?(T={id:h.id,object:h,geometry:g,material:_,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:x,group:m},n[t]=T):(T.id=h.id,T.object=h,T.geometry=g,T.material=_,T.materialVariant=o(h),T.groupOrder=y,T.renderOrder=h.renderOrder,T.z=x,T.group=m),t++,T}function l(h,g,_,y,x,m,T){T.reversedDepth===!0&&(x=-x);let L=a(h,g,_,y,x,m);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function c(h,g,_,y,x,m){let T=a(h,g,_,y,x,m);_.transmission>0?i.unshift(T):_.transparent===!0?s.unshift(T):e.unshift(T)}function p(h,g){e.length>1&&e.sort(h||Bv),i.length>1&&i.sort(g||_p),s.length>1&&s.sort(g||_p)}function d(){for(let h=t,g=n.length;h<g;h++){let _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:p}}function zv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new yp,n.set(i,[o])):s>=r.length?(o=new yp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function kv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new le};break;case"SpotLight":e={position:new Z,direction:new Z,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function Vv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Gv=0;function Hv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Wv(n){let t=new kv,e=Vv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);let s=new Z,r=new qe,o=new qe;function a(c){let p=0,d=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let g=0,_=0,y=0,x=0,m=0,T=0,L=0,b=0,A=0,C=0,N=0,M=0,E=0,I=0;c.sort(Hv);for(let q=0,k=c.length;q<k;q++){let O=c[q],V=O.color,K=O.intensity,J=O.distance,nt=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===hs?nt=O.shadow.map.texture:nt=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=V.r*K,d+=V.g*K,h+=V.b*K;else if(O.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(O.sh.coefficients[$],K);I++}else if(O.isSunLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Q=O.shadow,st=e.get(O);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=st,i.sunShadowMap[_]=nt;let mt=Q.getViewportCount();for(let xt=0;xt<mt;xt++)i.sunShadowMatrix[y+xt]=Q.getMatrix(xt),i.sunShadowCascade[y+xt]=Q._cascadeData[xt];y+=mt,_++}i.sun[g]=$,g++}else if(O.isDirectionalLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Q=O.shadow,st=e.get(O);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,i.directionalShadow[x]=st,i.directionalShadowMap[x]=nt,i.directionalShadowMatrix[x]=O.shadow.matrix,A++}i.directional[x]=$,x++}else if(O.isSpotLight){let $=t.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(V).multiplyScalar(K),$.distance=J,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,i.spot[T]=$;let Q=O.shadow;if(O.map&&(i.spotLightMap[M]=O.map,M++,Q.updateMatrices(O),O.castShadow&&E++),i.spotLightMatrix[T]=Q.matrix,O.castShadow){let st=e.get(O);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,i.spotShadow[T]=st,i.spotShadowMap[T]=nt,N++}T++}else if(O.isRectAreaLight){let $=t.get(O);$.color.copy(V).multiplyScalar(K),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),i.rectArea[L]=$,L++}else if(O.isPointLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){let Q=O.shadow,st=e.get(O);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,st.shadowCameraNear=Q.camera.near,st.shadowCameraFar=Q.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=O.shadow.matrix,C++}i.point[m]=$,m++}else if(O.isHemisphereLight){let $=t.get(O);$.skyColor.copy(O.color).multiplyScalar(K),$.groundColor.copy(O.groundColor).multiplyScalar(K),i.hemi[b]=$,b++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=h;let z=i.hash;(z.sunLength!==g||z.directionalLength!==x||z.pointLength!==m||z.spotLength!==T||z.rectAreaLength!==L||z.hemiLength!==b||z.numSunShadows!==_||z.numDirectionalShadows!==A||z.numPointShadows!==C||z.numSpotShadows!==N||z.numSpotMaps!==M||z.numLightProbes!==I)&&(i.sun.length=g,i.directional.length=x,i.spot.length=T,i.rectArea.length=L,i.point.length=m,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=I,z.sunLength=g,z.directionalLength=x,z.pointLength=m,z.spotLength=T,z.rectAreaLength=L,z.hemiLength=b,z.numSunShadows=_,z.numDirectionalShadows=A,z.numPointShadows=C,z.numSpotShadows=N,z.numSpotMaps=M,z.numLightProbes=I,i.version=Gv++)}function l(c,p){let d=0,h=0,g=0,_=0,y=0,x=0,m=p.matrixWorldInverse;for(let T=0,L=c.length;T<L;T++){let b=c[T];if(b.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),d++}else if(b.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(b.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),_++}else if(b.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let A=i.point[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),g++}else if(b.isHemisphereLight){let A=i.hemi[x];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function vp(n){let t=new Wv(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function p(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Xv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vp(n),t.set(s,[a])):r>=o.length?(a=new vp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$v=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Zv=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Mp=new qe,yo=new Z,Qh=new Z;function Jv(n,t,e){let i=new Qr,s=new ve,r=new ve,o=new Ze,a=new Ya,l=new $a,c={},p=e.maxTextureSize,d={[os]:Cn,[Cn]:os,[Wn]:Wn},h=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new on;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Oe(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let m=this.type;this.render=function(C,N,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===md&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lo);let E=n.getRenderTarget(),I=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Mi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let k=m!==this.type;k&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(V=>V.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,V=C.length;O<V;O++){let K=C[O],J=K.shadow;if(J===void 0){re("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let nt=J.getFrameExtents();s.multiply(nt),r.copy(J.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/nt.x),s.x=r.x*nt.x,J.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/nt.y),s.y=r.y*nt.y,J.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=$,J.map===null||k===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===sr){if(K.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Pn(s.x,s.y,{format:hs,type:oi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new ns(s.x,s.y,ri),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=xi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=hn,J.map.depthTexture.magFilter=hn}else K.isPointLight?(J.map=new jl(s.x),J.map.depthTexture=new Xa(s.x,si)):(J.map=new Pn(s.x,s.y),J.map.depthTexture=new ns(s.x,s.y,si)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=xi,this.type===lo?(J.map.depthTexture.compareFunction=$?$l:Yl,J.map.depthTexture.minFilter=sn,J.map.depthTexture.magFilter=sn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=hn,J.map.depthTexture.magFilter=hn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,M);for(let st=0;st<Q;st++){let mt=J.getCamera(st);if(K.isPointLight){let xt=J.camera,bt=J.matrix,wt=K.distance||xt.far;wt!==xt.far&&(xt.far=wt,xt.updateProjectionMatrix()),yo.setFromMatrixPosition(K.matrixWorld),xt.position.copy(yo),Qh.copy(xt.position),Qh.add($v[st]),xt.up.copy(Zv[st]),xt.lookAt(Qh),xt.updateMatrixWorld(),bt.makeTranslation(-yo.x,-yo.y,-yo.z),Mp.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Mp,xt.coordinateSystem,xt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,st),n.clear();else{st===0&&(n.setRenderTarget(J.map),n.clear());let xt=J.getViewport(st);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),q.viewport(o)}i=J.getFrustum(st),b(N,M,mt,K,this.type)}J.isPointLightShadow!==!0&&this.type===sr&&T(J,M),J.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(E,I,z)};function T(C,N){let M=t.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null?C.mapPass=new Pn(s.x,s.y,{format:hs,type:oi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,M,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,M,g,y,null)}function L(C,N,M,E){let I=null,z=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)I=z;else if(I=M.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let q=I.uuid,k=N.uuid,O=c[q];O===void 0&&(O={},c[q]=O);let V=O[k];V===void 0&&(V=I.clone(),O[k]=V,N.addEventListener("dispose",A)),I=V}if(I.visible=N.visible,I.wireframe=N.wireframe,E===sr?I.side=N.shadowSide!==null?N.shadowSide:N.side:I.side=N.shadowSide!==null?N.shadowSide:d[N.side],I.alphaMap=N.alphaMap,I.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,I.map=N.map,I.clipShadows=N.clipShadows,I.clippingPlanes=N.clippingPlanes,I.clipIntersection=N.clipIntersection,I.displacementMap=N.displacementMap,I.displacementScale=N.displacementScale,I.displacementBias=N.displacementBias,I.wireframeLinewidth=N.wireframeLinewidth,I.linewidth=N.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let q=n.properties.get(I);q.light=M}return I}function b(C,N,M,E,I){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===sr)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let k=t.update(C),O=C.material;if(Array.isArray(O)){let V=k.groups;for(let K=0,J=V.length;K<J;K++){let nt=V[K],$=O[nt.materialIndex];if($&&$.visible){let Q=L(C,$,E,I);C.onBeforeShadow(n,C,N,M,k,Q,nt),n.renderBufferDirect(M,null,k,Q,C,nt),C.onAfterShadow(n,C,N,M,k,Q,nt)}}}else if(O.visible){let V=L(C,O,E,I);C.onBeforeShadow(n,C,N,M,k,V,null),n.renderBufferDirect(M,null,k,V,C,null),C.onAfterShadow(n,C,N,M,k,V,null)}}let q=C.children;for(let k=0,O=q.length;k<O;k++)b(q[k],N,M,E,I)}function A(C){C.target.removeEventListener("dispose",A);for(let M in c){let E=c[M],I=C.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function Kv(n,t){function e(){let W=!1,Rt=new Ze,ut=null,Pt=new Ze(0,0,0,0);return{setMask:function(Ot){ut!==Ot&&!W&&(n.colorMask(Ot,Ot,Ot,Ot),ut=Ot)},setLocked:function(Ot){W=Ot},setClear:function(Ot,gt,Zt,Yt,Le){Le===!0&&(Ot*=Yt,gt*=Yt,Zt*=Yt),Rt.set(Ot,gt,Zt,Yt),Pt.equals(Rt)===!1&&(n.clearColor(Ot,gt,Zt,Yt),Pt.copy(Rt))},reset:function(){W=!1,ut=null,Pt.set(-1,0,0,0)}}}function i(){let W=!1,Rt=!1,ut=null,Pt=null,Ot=null;return{setReversed:function(gt){if(Rt!==gt){let Zt=t.get("EXT_clip_control");gt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=gt;let Yt=Ot;Ot=null,this.setClear(Yt)}},getReversed:function(){return Rt},setTest:function(gt){gt?it(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(gt){ut!==gt&&!W&&(n.depthMask(gt),ut=gt)},setFunc:function(gt){if(Rt&&(gt=Zd[gt]),Pt!==gt){switch(gt){case Ea:n.depthFunc(n.NEVER);break;case Ta:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Pa:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=gt}},setLocked:function(gt){W=gt},setClear:function(gt){Ot!==gt&&(Ot=gt,Rt&&(gt=1-gt),n.clearDepth(gt))},reset:function(){W=!1,ut=null,Pt=null,Ot=null,Rt=!1}}}function s(){let W=!1,Rt=null,ut=null,Pt=null,Ot=null,gt=null,Zt=null,Yt=null,Le=null;return{setTest:function(xe){W||(xe?it(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(xe){Rt!==xe&&!W&&(n.stencilMask(xe),Rt=xe)},setFunc:function(xe,un,St){(ut!==xe||Pt!==un||Ot!==St)&&(n.stencilFunc(xe,un,St),ut=xe,Pt=un,Ot=St)},setOp:function(xe,un,St){(gt!==xe||Zt!==un||Yt!==St)&&(n.stencilOp(xe,un,St),gt=xe,Zt=un,Yt=St)},setLocked:function(xe){W=xe},setClear:function(xe){Le!==xe&&(n.clearStencil(xe),Le=xe)},reset:function(){W=!1,Rt=null,ut=null,Pt=null,Ot=null,gt=null,Zt=null,Yt=null,Le=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,p={},d={},h={},g=new WeakMap,_=[],y=null,x=!1,m=null,T=null,L=null,b=null,A=null,C=null,N=null,M=new le(0,0,0),E=0,I=!1,z=null,q=null,k=null,O=null,V=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,nt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),J=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=nt>=2);let Q=null,st={},mt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),bt=new Ze().fromArray(mt),wt=new Ze().fromArray(xt);function yt(W,Rt,ut,Pt){let Ot=new Uint8Array(4),gt=n.createTexture();n.bindTexture(W,gt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<ut;Zt++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Ot):n.texImage2D(Rt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ot);return gt}let B={};B[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(js),Ht(!1),oe(ph),it(n.CULL_FACE),ee(Mi);function it(W){p[W]!==!0&&(n.enable(W),p[W]=!0)}function pt(W){p[W]!==!1&&(n.disable(W),p[W]=!1)}function Lt(W,Rt){return h[W]!==Rt?(n.bindFramebuffer(W,Rt),h[W]=Rt,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Rt),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function dt(W,Rt){let ut=_,Pt=!1;if(W){ut=g.get(Rt),ut===void 0&&(ut=[],g.set(Rt,ut));let Ot=W.textures;if(ut.length!==Ot.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Zt=Ot.length;gt<Zt;gt++)ut[gt]=n.COLOR_ATTACHMENT0+gt;ut.length=Ot.length,Pt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(ut)}function Vt(W){return y!==W?(n.useProgram(W),y=W,!0):!1}let Qt={[Ss]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[_d]:n.FUNC_REVERSE_SUBTRACT};Qt[yd]=n.MIN,Qt[vd]=n.MAX;let Jt={[Md]:n.ZERO,[bd]:n.ONE,[Sd]:n.SRC_COLOR,[_h]:n.SRC_ALPHA,[Rd]:n.SRC_ALPHA_SATURATE,[Td]:n.DST_COLOR,[Ad]:n.DST_ALPHA,[wd]:n.ONE_MINUS_SRC_COLOR,[yh]:n.ONE_MINUS_SRC_ALPHA,[Cd]:n.ONE_MINUS_DST_COLOR,[Ed]:n.ONE_MINUS_DST_ALPHA,[Id]:n.CONSTANT_COLOR,[Pd]:n.ONE_MINUS_CONSTANT_COLOR,[Ld]:n.CONSTANT_ALPHA,[Dd]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(W,Rt,ut,Pt,Ot,gt,Zt,Yt,Le,xe){if(W===Mi){x===!0&&(pt(n.BLEND),x=!1);return}if(x===!1&&(it(n.BLEND),x=!0),W!==gd){if(W!==m||xe!==I){if((T!==Ss||A!==Ss)&&(n.blendEquation(n.FUNC_ADD),T=Ss,A=Ss),xe)switch(W){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mh:n.blendFunc(n.ONE,n.ONE);break;case gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ae("WebGLState: Invalid blending: ",W);break}else switch(W){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",W);break}L=null,b=null,C=null,N=null,M.set(0,0,0),E=0,m=W,I=xe}return}Ot=Ot||Rt,gt=gt||ut,Zt=Zt||Pt,(Rt!==T||Ot!==A)&&(n.blendEquationSeparate(Qt[Rt],Qt[Ot]),T=Rt,A=Ot),(ut!==L||Pt!==b||gt!==C||Zt!==N)&&(n.blendFuncSeparate(Jt[ut],Jt[Pt],Jt[gt],Jt[Zt]),L=ut,b=Pt,C=gt,N=Zt),(Yt.equals(M)===!1||Le!==E)&&(n.blendColor(Yt.r,Yt.g,Yt.b,Le),M.copy(Yt),E=Le),m=W,I=!1}function ue(W,Rt){W.side===Wn?pt(n.CULL_FACE):it(n.CULL_FACE);let ut=W.side===Cn;Rt&&(ut=!ut),Ht(ut),W.blending===rr&&W.transparent===!1?ee(Mi):ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Pt=W.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(W){z!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),z=W)}function oe(W){W!==dd?(it(n.CULL_FACE),W!==q&&(W===ph?n.cullFace(n.BACK):W===pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),q=W}function Be(W){W!==k&&(J&&n.lineWidth(W),k=W)}function Ve(W,Rt,ut){W?(it(n.POLYGON_OFFSET_FILL),(O!==Rt||V!==ut)&&(O=Rt,V=ut,o.getReversed()&&(Rt=-Rt),n.polygonOffset(Rt,ut))):pt(n.POLYGON_OFFSET_FILL)}function Te(W){W?it(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Pe(W){W===void 0&&(W=n.TEXTURE0+K-1),Q!==W&&(n.activeTexture(W),Q=W)}function H(W,Rt,ut){ut===void 0&&(Q===null?ut=n.TEXTURE0+K-1:ut=Q);let Pt=st[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},st[ut]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(Q!==ut&&(n.activeTexture(ut),Q=ut),n.bindTexture(W,Rt||B[W]),Pt.type=W,Pt.texture=Rt)}function Ge(){let W=st[Q];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Me(){try{n.compressedTexImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function v(){try{n.texSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function Y(){try{n.texSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function et(){try{n.compressedTexSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function Tt(){try{n.texStorage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function It(){try{n.texStorage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function lt(){try{n.texImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function ft(){try{n.texImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function At(W){return d[W]!==void 0?d[W]:n.getParameter(W)}function $t(W,Rt){d[W]!==Rt&&(n.pixelStorei(W,Rt),d[W]=Rt)}function Ct(W){bt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),bt.copy(W))}function Et(W){wt.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function qt(W,Rt){let ut=c.get(Rt);ut===void 0&&(ut=new WeakMap,c.set(Rt,ut));let Pt=ut.get(W);Pt===void 0&&(Pt=n.getUniformBlockIndex(Rt,W.name),ut.set(W,Pt))}function ne(W,Rt){let Pt=c.get(Rt).get(W);l.get(Rt)!==Pt&&(n.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),l.set(Rt,Pt))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},d={},Q=null,st={},h={},g=new WeakMap,_=[],y=null,x=!1,m=null,T=null,L=null,b=null,A=null,C=null,N=null,M=new le(0,0,0),E=0,I=!1,z=null,q=null,k=null,O=null,V=null,bt.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:pt,bindFramebuffer:Lt,drawBuffers:dt,useProgram:Vt,setBlending:ee,setMaterial:ue,setFlipSided:Ht,setCullFace:oe,setLineWidth:Be,setPolygonOffset:Ve,setScissorTest:Te,activeTexture:Pe,bindTexture:H,unbindTexture:Ge,compressedTexImage2D:Me,compressedTexImage3D:D,texImage2D:lt,texImage3D:ft,pixelStorei:$t,getParameter:At,updateUBOMapping:qt,uniformBlockBinding:ne,texStorage2D:Tt,texStorage3D:It,texSubImage2D:v,texSubImage3D:Y,compressedTexSubImage2D:et,compressedTexSubImage3D:at,scissor:Ct,viewport:Et,reset:ce}}function jv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,p=new WeakMap,d=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,v){return _?new OffscreenCanvas(D,v):Xr("canvas")}function x(D,v,Y){let et=1,at=Me(D);if((at.width>Y||at.height>Y)&&(et=Y/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Tt=Math.floor(et*at.width),It=Math.floor(et*at.height);h===void 0&&(h=y(Tt,It));let lt=v?y(Tt,It):h;return lt.width=Tt,lt.height=It,lt.getContext("2d").drawImage(D,0,0,Tt,It),re("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Tt+"x"+It+")."),lt}else return"data"in D&&re("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),D;return D}function m(D){return D.generateMipmaps}function T(D){n.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,v,Y,et,at,Tt=!1){if(D!==null){if(n[D]!==void 0)return n[D];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let It;et&&(It=t.get("EXT_texture_norm16"),It||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=v;if(v===n.RED&&(Y===n.FLOAT&&(lt=n.R32F),Y===n.HALF_FLOAT&&(lt=n.R16F),Y===n.UNSIGNED_BYTE&&(lt=n.R8),Y===n.UNSIGNED_SHORT&&It&&(lt=It.R16_EXT),Y===n.SHORT&&It&&(lt=It.R16_SNORM_EXT)),v===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.R8UI),Y===n.UNSIGNED_SHORT&&(lt=n.R16UI),Y===n.UNSIGNED_INT&&(lt=n.R32UI),Y===n.BYTE&&(lt=n.R8I),Y===n.SHORT&&(lt=n.R16I),Y===n.INT&&(lt=n.R32I)),v===n.RG&&(Y===n.FLOAT&&(lt=n.RG32F),Y===n.HALF_FLOAT&&(lt=n.RG16F),Y===n.UNSIGNED_BYTE&&(lt=n.RG8),Y===n.UNSIGNED_SHORT&&It&&(lt=It.RG16_EXT),Y===n.SHORT&&It&&(lt=It.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RG16UI),Y===n.UNSIGNED_INT&&(lt=n.RG32UI),Y===n.BYTE&&(lt=n.RG8I),Y===n.SHORT&&(lt=n.RG16I),Y===n.INT&&(lt=n.RG32I)),v===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),Y===n.UNSIGNED_INT&&(lt=n.RGB32UI),Y===n.BYTE&&(lt=n.RGB8I),Y===n.SHORT&&(lt=n.RGB16I),Y===n.INT&&(lt=n.RGB32I)),v===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(lt=n.RGBA32UI),Y===n.BYTE&&(lt=n.RGBA8I),Y===n.SHORT&&(lt=n.RGBA16I),Y===n.INT&&(lt=n.RGBA32I)),v===n.RGB&&(Y===n.UNSIGNED_SHORT&&It&&(lt=It.RGB16_EXT),Y===n.SHORT&&It&&(lt=It.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),v===n.RGBA){let ft=Tt?Hr:Se.getTransfer(at);Y===n.FLOAT&&(lt=n.RGBA32F),Y===n.HALF_FLOAT&&(lt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(lt=ft===De?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&It&&(lt=It.RGBA16_EXT),Y===n.SHORT&&It&&(lt=It.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function A(D,v){let Y;return D?v===null||v===si||v===ar?Y=n.DEPTH24_STENCIL8:v===ri?Y=n.DEPTH32F_STENCIL8:v===or&&(Y=n.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===ar?Y=n.DEPTH_COMPONENT24:v===ri?Y=n.DEPTH_COMPONENT32F:v===or&&(Y=n.DEPTH_COMPONENT16),Y}function C(D,v){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?v.mipmaps.length:1}function N(D){let v=D.target;v.removeEventListener("dispose",N),E(v),v.isVideoTexture&&p.delete(v),v.isHTMLTexture&&d.delete(v)}function M(D){let v=D.target;v.removeEventListener("dispose",M),z(v)}function E(D){let v=i.get(D);if(v.__webglInit===void 0)return;let Y=D.source,et=g.get(Y);if(et){let at=et[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(D),Object.keys(et).length===0&&g.delete(Y)}i.remove(D)}function I(D){let v=i.get(D);n.deleteTexture(v.__webglTexture);let Y=D.source,et=g.get(Y);delete et[v.__cacheKey],o.memory.textures--}function z(D){let v=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let at=0;at<v.__webglFramebuffer[et].length;at++)n.deleteFramebuffer(v.__webglFramebuffer[et][at]);else n.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)n.deleteFramebuffer(v.__webglFramebuffer[et]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=D.textures;for(let et=0,at=Y.length;et<at;et++){let Tt=i.get(Y[et]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(Y[et])}i.remove(D)}let q=0;function k(){q=0}function O(){return q}function V(D){q=D}function K(){let D=q;return D>=s.maxTextures&&re("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,D}function J(D){let v=[];return v.push(D.wrapS),v.push(D.wrapT),v.push(D.wrapR||0),v.push(D.magFilter),v.push(D.minFilter),v.push(D.anisotropy),v.push(D.internalFormat),v.push(D.format),v.push(D.type),v.push(D.generateMipmaps),v.push(D.premultiplyAlpha),v.push(D.flipY),v.push(D.unpackAlignment),v.push(D.colorSpace),v.join()}function nt(D,v){let Y=i.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){let et=D.image;if(et===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Y,D,v);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+v)}function $(D,v){let Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){pt(Y,D,v);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+v)}function Q(D,v){let Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){pt(Y,D,v);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+v)}function st(D,v){let Y=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){Lt(Y,D,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+v)}let mt={[Da]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},xt={[hn]:n.NEAREST,[Fd]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[hl]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},bt={[kd]:n.NEVER,[Xd]:n.ALWAYS,[Vd]:n.LESS,[Yl]:n.LEQUAL,[Gd]:n.EQUAL,[$l]:n.GEQUAL,[Hd]:n.GREATER,[Wd]:n.NOTEQUAL};function wt(D,v){if(v.type===ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===hl||v.magFilter===ho||v.magFilter===ls||v.minFilter===sn||v.minFilter===hl||v.minFilter===ho||v.minFilter===ls)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,mt[v.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,mt[v.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,mt[v.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,xt[v.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==ho&&v.minFilter!==ls||v.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function yt(D,v){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,v.addEventListener("dispose",N));let et=v.source,at=g.get(et);at===void 0&&(at={},g.set(et,at));let Tt=J(v);if(Tt!==D.__cacheKey){at[Tt]===void 0&&(at[Tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),at[Tt].usedTimes++;let It=at[D.__cacheKey];It!==void 0&&(at[D.__cacheKey].usedTimes--,It.usedTimes===0&&I(v)),D.__cacheKey=Tt,D.__webglTexture=at[Tt].texture}return Y}function B(D,v,Y){return Math.floor(Math.floor(D/Y)/v)}function it(D,v,Y,et){let Tt=D.updateRanges;if(Tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Y,et,v.data);else{Tt.sort(($t,Ct)=>$t.start-Ct.start);let It=0;for(let $t=1;$t<Tt.length;$t++){let Ct=Tt[It],Et=Tt[$t],qt=Ct.start+Ct.count,ne=B(Et.start,v.width,4),ce=B(Ct.start,v.width,4);Et.start<=qt+1&&ne===ce&&B(Et.start+Et.count-1,v.width,4)===ne?Ct.count=Math.max(Ct.count,Et.start+Et.count-Ct.start):(++It,Tt[It]=Et)}Tt.length=It+1;let lt=e.getParameter(n.UNPACK_ROW_LENGTH),ft=e.getParameter(n.UNPACK_SKIP_PIXELS),At=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let $t=0,Ct=Tt.length;$t<Ct;$t++){let Et=Tt[$t],qt=Math.floor(Et.start/4),ne=Math.ceil(Et.count/4),ce=qt%v.width,W=Math.floor(qt/v.width),Rt=ne,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,ce,W,Rt,ut,Y,et,v.data)}D.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,lt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function pt(D,v,Y){let et=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=n.TEXTURE_3D);let at=yt(D,v),Tt=v.source;e.bindTexture(et,D.__webglTexture,n.TEXTURE0+Y);let It=i.get(Tt);if(Tt.version!==It.__version||at===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ut=Se.getPrimaries(Se.workingColorSpace),Pt=v.colorSpace===Oi?null:Se.getPrimaries(v.colorSpace),Ot=v.colorSpace===Oi||ut===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ft=x(v.image,!1,s.maxTextureSize);ft=Ge(v,ft);let At=r.convert(v.format,v.colorSpace),$t=r.convert(v.type),Ct=b(v.internalFormat,At,$t,v.normalized,v.colorSpace,v.isVideoTexture);wt(et,v);let Et,qt=v.mipmaps,ne=v.isVideoTexture!==!0,ce=It.__version===void 0||at===!0,W=Tt.dataReady,Rt=C(v,ft);if(v.isDepthTexture)Ct=A(v.format===cs,v.type),ce&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Ct,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Ct,ft.width,ft.height,0,At,$t,null));else if(v.isDataTexture)if(qt.length>0){ne&&ce&&e.texStorage2D(n.TEXTURE_2D,Rt,Ct,qt[0].width,qt[0].height);for(let ut=0,Pt=qt.length;ut<Pt;ut++)Et=qt[ut],ne?W&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Et.width,Et.height,At,$t,Et.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,Et.width,Et.height,0,At,$t,Et.data);v.generateMipmaps=!1}else ne?(ce&&e.texStorage2D(n.TEXTURE_2D,Rt,Ct,ft.width,ft.height),W&&it(v,ft,At,$t)):e.texImage2D(n.TEXTURE_2D,0,Ct,ft.width,ft.height,0,At,$t,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ne&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ct,qt[0].width,qt[0].height,ft.depth);for(let ut=0,Pt=qt.length;ut<Pt;ut++)if(Et=qt[ut],v.format!==Xn)if(At!==null)if(ne){if(W)if(v.layerUpdates.size>0){let Ot=Gh(Et.width,Et.height,v.format,v.type);for(let gt of v.layerUpdates){let Zt=Et.data.subarray(gt*Ot/Et.data.BYTES_PER_ELEMENT,(gt+1)*Ot/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,gt,Et.width,Et.height,1,At,Zt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ft.depth,At,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Et.width,Et.height,ft.depth,0,Et.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ft.depth,At,$t,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Et.width,Et.height,ft.depth,0,At,$t,Et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ne&&ce&&e.texStorage2D(n.TEXTURE_2D,Rt,Ct,qt[0].width,qt[0].height);for(let ut=0,Pt=qt.length;ut<Pt;ut++)Et=qt[ut],v.format!==Xn?At!==null?ne?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Ct,Et.width,Et.height,0,Et.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Et.width,Et.height,At,$t,Et.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,Et.width,Et.height,0,At,$t,Et.data)}else if(v.isDataArrayTexture)if(ne){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ct,ft.width,ft.height,ft.depth),W)if(v.layerUpdates.size>0){let ut=Gh(ft.width,ft.height,v.format,v.type);for(let Pt of v.layerUpdates){let Ot=ft.data.subarray(Pt*ut/ft.data.BYTES_PER_ELEMENT,(Pt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,ft.width,ft.height,1,At,$t,Ot)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,$t,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,ft.width,ft.height,ft.depth,0,At,$t,ft.data);else if(v.isData3DTexture)ne?(ce&&e.texStorage3D(n.TEXTURE_3D,Rt,Ct,ft.width,ft.height,ft.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,$t,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,ft.width,ft.height,ft.depth,0,At,$t,ft.data);else if(v.isFramebufferTexture){if(ce)if(ne)e.texStorage2D(n.TEXTURE_2D,Rt,Ct,ft.width,ft.height);else{let ut=ft.width,Pt=ft.height;for(let Ot=0;Ot<Rt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,Ct,ut,Pt,0,At,$t,null),ut>>=1,Pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ft.parentNode!==ut){ut.appendChild(ft),d.add(v),ut.onpaint=Pt=>{let Ot=Pt.changedElements;for(let gt of d)Ot.includes(gt.image)&&(gt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ft);else{let Ot=n.RGBA,gt=n.RGBA,Zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ot,gt,Zt,ft)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qt.length>0){if(ne&&ce){let ut=Me(qt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Ct,ut.width,ut.height)}for(let ut=0,Pt=qt.length;ut<Pt;ut++)Et=qt[ut],ne?W&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,At,$t,Et):e.texImage2D(n.TEXTURE_2D,ut,Ct,At,$t,Et);v.generateMipmaps=!1}else if(ne){if(ce){let ut=Me(ft);e.texStorage2D(n.TEXTURE_2D,Rt,Ct,ut.width,ut.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,$t,ft)}else e.texImage2D(n.TEXTURE_2D,0,Ct,At,$t,ft);m(v)&&T(et),It.__version=Tt.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function Lt(D,v,Y){if(v.image.length!==6)return;let et=yt(D,v),at=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);let Tt=i.get(at);if(at.version!==Tt.__version||et===!0){e.activeTexture(n.TEXTURE0+Y);let It=Se.getPrimaries(Se.workingColorSpace),lt=v.colorSpace===Oi?null:Se.getPrimaries(v.colorSpace),ft=v.colorSpace===Oi||It===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let At=v.isCompressedTexture||v.image[0].isCompressedTexture,$t=v.image[0]&&v.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!At&&!$t?Ct[gt]=x(v.image[gt],!0,s.maxCubemapSize):Ct[gt]=$t?v.image[gt].image:v.image[gt],Ct[gt]=Ge(v,Ct[gt]);let Et=Ct[0],qt=r.convert(v.format,v.colorSpace),ne=r.convert(v.type),ce=b(v.internalFormat,qt,ne,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,Rt=Tt.__version===void 0||et===!0,ut=at.dataReady,Pt=C(v,Et);wt(n.TEXTURE_CUBE_MAP,v);let Ot;if(At){W&&Rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ce,Et.width,Et.height);for(let gt=0;gt<6;gt++){Ot=Ct[gt].mipmaps;for(let Zt=0;Zt<Ot.length;Zt++){let Yt=Ot[Zt];v.format!==Xn?qt!==null?W?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Yt.width,Yt.height,qt,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,ce,Yt.width,Yt.height,0,Yt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Yt.width,Yt.height,qt,ne,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,ce,Yt.width,Yt.height,0,qt,ne,Yt.data)}}}else{if(Ot=v.mipmaps,W&&Rt){Ot.length>0&&Pt++;let gt=Me(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ce,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if($t){W?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,qt,ne,Ct[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,Ct[gt].width,Ct[gt].height,0,qt,ne,Ct[gt].data);for(let Zt=0;Zt<Ot.length;Zt++){let Le=Ot[Zt].image[gt].image;W?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Le.width,Le.height,qt,ne,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,ce,Le.width,Le.height,0,qt,ne,Le.data)}}else{W?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,qt,ne,Ct[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,qt,ne,Ct[gt]);for(let Zt=0;Zt<Ot.length;Zt++){let Yt=Ot[Zt];W?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,qt,ne,Yt.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,ce,qt,ne,Yt.image[gt])}}}m(v)&&T(n.TEXTURE_CUBE_MAP),Tt.__version=at.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function dt(D,v,Y,et,at,Tt){let It=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),ft=b(Y.internalFormat,It,lt,Y.normalized,Y.colorSpace),At=i.get(v),$t=i.get(Y);if($t.__renderTarget=v,!At.__hasExternalTextures){let Ct=Math.max(1,v.width>>Tt),Et=Math.max(1,v.height>>Tt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,Tt,ft,Ct,Et,v.depth,0,It,lt,null):e.texImage2D(at,Tt,ft,Ct,Et,0,It,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),Pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,at,$t.__webglTexture,0,Te(v)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,at,$t.__webglTexture,Tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(D,v,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),v.depthBuffer){let et=v.depthTexture,at=et&&et.isDepthTexture?et.type:null,Tt=A(v.stencilBuffer,at),It=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(v),Tt,v.width,v.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(v),Tt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,D)}else{let et=v.textures;for(let at=0;at<et.length;at++){let Tt=et[at],It=r.convert(Tt.format,Tt.colorSpace),lt=r.convert(Tt.type),ft=b(Tt.internalFormat,It,lt,Tt.normalized,Tt.colorSpace);Pe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(v),ft,v.width,v.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(v),ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qt(D,v,Y){let et=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(v.depthTexture);if(at.__renderTarget=v,(!at.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et){if(at.__webglInit===void 0&&(at.__webglInit=!0,v.depthTexture.addEventListener("dispose",N)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),wt(n.TEXTURE_CUBE_MAP,v.depthTexture);let At=r.convert(v.depthTexture.format),$t=r.convert(v.depthTexture.type),Ct;v.depthTexture.format===xi?Ct=n.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(Ct=n.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ct,v.width,v.height,0,At,$t,null)}}else nt(v.depthTexture,0);let Tt=at.__webglTexture,It=Te(v),lt=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,ft=v.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)Pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,lt,Tt,0,It):n.framebufferTexture2D(n.FRAMEBUFFER,ft,lt,Tt,0);else if(v.depthTexture.format===cs)Pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,lt,Tt,0,It):n.framebufferTexture2D(n.FRAMEBUFFER,ft,lt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(D){let v=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==D.depthTexture){let et=D.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=et}if(D.depthTexture&&!v.__autoAllocateDepthBuffer)if(Y)for(let et=0;et<6;et++)Qt(v.__webglFramebuffer[et],D,et);else{let et=D.texture.mipmaps;et&&et.length>0?Qt(v.__webglFramebuffer[0],D,0):Qt(v.__webglFramebuffer,D,0)}else if(Y){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=n.createRenderbuffer(),Vt(v.__webglDepthbuffer[et],D,!1);else{let at=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=v.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Tt)}}else{let et=D.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Vt(v.__webglDepthbuffer,D,!1);else{let at=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(D,v,Y){let et=i.get(D);v!==void 0&&dt(et.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Jt(D)}function ue(D){let v=D.texture,Y=i.get(D),et=i.get(v);D.addEventListener("dispose",M);let at=D.textures,Tt=D.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=v.version,o.memory.textures++),Tt){Y.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[lt]=[];for(let ft=0;ft<v.mipmaps.length;ft++)Y.__webglFramebuffer[lt][ft]=n.createFramebuffer()}else Y.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)Y.__webglFramebuffer[lt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(It)for(let lt=0,ft=at.length;lt<ft;lt++){let At=i.get(at[lt]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Pe(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let lt=0;lt<at.length;lt++){let ft=at[lt];Y.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[lt]);let At=r.convert(ft.format,ft.colorSpace),$t=r.convert(ft.type),Ct=b(ft.internalFormat,At,$t,ft.normalized,ft.colorSpace,D.isXRRenderTarget===!0),Et=Te(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,Ct,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(Y.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),wt(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)dt(Y.__webglFramebuffer[lt][ft],D,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else dt(Y.__webglFramebuffer[lt],D,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(v)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let lt=0,ft=at.length;lt<ft;lt++){let At=at[lt],$t=i.get(At),Ct=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,$t.__webglTexture),wt(Ct,At),dt(Y.__webglFramebuffer,D,At,n.COLOR_ATTACHMENT0+lt,Ct,0),m(At)&&T(Ct)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(lt=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),wt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)dt(Y.__webglFramebuffer[ft],D,v,n.COLOR_ATTACHMENT0,lt,ft);else dt(Y.__webglFramebuffer,D,v,n.COLOR_ATTACHMENT0,lt,0);m(v)&&T(lt),e.unbindTexture()}D.depthBuffer&&Jt(D)}function Ht(D){let v=D.textures;for(let Y=0,et=v.length;Y<et;Y++){let at=v[Y];if(m(at)){let Tt=L(D),It=i.get(at).__webglTexture;e.bindTexture(Tt,It),T(Tt),e.unbindTexture()}}}let oe=[],Be=[];function Ve(D){if(D.samples>0){if(Pe(D)===!1){let v=D.textures,Y=D.width,et=D.height,at=n.COLOR_BUFFER_BIT,Tt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(D),lt=v.length>1;if(lt)for(let At=0;At<v.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let ft=D.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let At=0;At<v.length;At++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let $t=i.get(v[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,Y,et,0,0,Y,et,at,n.NEAREST),l===!0&&(oe.length=0,Be.length=0,oe.push(n.COLOR_ATTACHMENT0+At),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(oe.push(Tt),Be.push(Tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let At=0;At<v.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let $t=i.get(v[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let v=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Te(D){return Math.min(s.maxSamples,D.samples)}function Pe(D){let v=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(D){let v=o.render.frame;p.get(D)!==v&&(p.set(D,v),D.update())}function Ge(D,v){let Y=D.colorSpace,et=D.format,at=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Gr&&Y!==Oi&&(Se.getTransfer(Y)===De?(et!==Xn||at!==On)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",Y)),v}function Me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=k,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=nt,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=st,this.rebindTextures=ee,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qv(n,t){function e(i,s=Oi){let r,o=Se.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return n.BYTE;if(i===Ih)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===ul)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===Dh)return n.ALPHA;if(i===Nh)return n.RGB;if(i===Xn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===Uh)return n.RED;if(i===pl)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===ml)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xl||i===_l||i===yl||i===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===bl||i===Sl||i===wl||i===Al||i===go||i===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ml||i===bl)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wl)return r.COMPRESSED_R11_EAC;if(i===Al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===go)return r.COMPRESSED_RG11_EAC;if(i===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Cl||i===Rl||i===Il||i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===Gl||i===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Vl)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===Xl||i===xo||i===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new vn({vertexShader:tM,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends _i{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,p=null,d=null,h=null,g=null,_=null,y=typeof XRWebGLBinding<"u",x=new au,m={},T=e.getContextAttributes(),L=null,b=null,A=[],C=[],N=new ve,M=null,E=null,I=new _n;I.viewport=new Ze;let z=new _n;z.viewport=new Ze;let q=[I,z],k=new ol,O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let it=A[B];return it===void 0&&(it=new er,A[B]=it),it.getTargetRaySpace()},this.getControllerGrip=function(B){let it=A[B];return it===void 0&&(it=new er,A[B]=it),it.getGripSpace()},this.getHand=function(B){let it=A[B];return it===void 0&&(it=new er,A[B]=it),it.getHandSpace()};function K(B){let it=C.indexOf(B.inputSource);if(it===-1)return;let pt=A[it];pt!==void 0&&(pt.update(B.inputSource,B.frame,c||o),pt.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let B=0;B<A.length;B++){let it=C[B];it!==null&&(C[B]=null,A[B].disconnect(it))}O=null,V=null,x.reset();for(let B in m)delete m[B];if(t.setRenderTarget(L),g=null,h=null,d=null,s=null,b=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(N.width,N.height,!1),E!==null){let B=E.camera;B.fov=E.fov,B.zoom=E.zoom,B.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,dt=null;T.depth&&(dt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=T.stencil?cs:xi,Lt=T.stencil?ar:si);let Vt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Pn(h.textureWidth,h.textureHeight,{format:Xn,type:On,depthTexture:new ns(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Pn(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(B){for(let it=0;it<B.removed.length;it++){let pt=B.removed[it],Lt=C.indexOf(pt);Lt>=0&&(C[Lt]=null,A[Lt].disconnect(pt))}for(let it=0;it<B.added.length;it++){let pt=B.added[it],Lt=C.indexOf(pt);if(Lt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=C.length){C.push(pt),Lt=Vt;break}else if(C[Vt]===null){C[Vt]=pt,Lt=Vt;break}if(Lt===-1)break}let dt=A[Lt];dt&&dt.connect(pt)}}let $=new Z,Q=new Z;function st(B,it,pt){$.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(pt.matrixWorld);let Lt=$.distanceTo(Q),dt=it.projectionMatrix.elements,Vt=pt.projectionMatrix.elements,Qt=dt[14]/(dt[10]-1),Jt=dt[14]/(dt[10]+1),ee=(dt[9]+1)/dt[5],ue=(dt[9]-1)/dt[5],Ht=(dt[8]-1)/dt[0],oe=(Vt[8]+1)/Vt[0],Be=Qt*Ht,Ve=Qt*oe,Te=Lt/(-Ht+oe),Pe=Te*-Ht;if(it.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Pe),B.translateZ(Te),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),dt[10]===-1)B.projectionMatrix.copy(it.projectionMatrix),B.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let H=Qt+Te,Ge=Jt+Te,Me=Be-Pe,D=Ve+(Lt-Pe),v=ee*Jt/Ge*H,Y=ue*Jt/Ge*H;B.projectionMatrix.makePerspective(Me,D,v,Y,H,Ge),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function mt(B,it){it===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(it.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let it=B.near,pt=B.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),k.near=z.near=I.near=it,k.far=z.far=I.far=pt,(O!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,V=k.far),k.layers.mask=B.layers.mask|6,I.layers.mask=k.layers.mask&-5,z.layers.mask=k.layers.mask&-3;let Lt=B.parent,dt=k.cameras;mt(k,Lt);for(let Vt=0;Vt<dt.length;Vt++)mt(dt[Vt],Lt);dt.length===2?st(k,I,z):k.projectionMatrix.copy(I.projectionMatrix),E===null&&B.isPerspectiveCamera&&(E={camera:B,fov:B.fov,zoom:B.zoom}),xt(B,k,Lt)};function xt(B,it,pt){pt===null?B.matrix.copy(it.matrixWorld):(B.matrix.copy(pt.matrixWorld),B.matrix.invert(),B.matrix.multiply(it.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(it.projectionMatrix),B.projectionMatrixInverse.copy(it.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Fa*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(B){return m[B]};let bt=null;function wt(B,it){if(p=it.getViewerPose(c||o),_=it,p!==null){let pt=p.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let Lt=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,Lt=!0);for(let Jt=0;Jt<pt.length;Jt++){let ee=pt[Jt],ue=null;if(g!==null)ue=g.getViewport(ee);else{let oe=d.getViewSubImage(h,ee);ue=oe.viewport,Jt===0&&(t.setRenderTargetTextures(b,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(b))}let Ht=q[Jt];Ht===void 0&&(Ht=new _n,Ht.layers.enable(Jt),Ht.viewport=new Ze,q[Jt]=Ht),Ht.matrix.fromArray(ee.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ee.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ue.x,ue.y,ue.width,ue.height),Jt===0&&(k.matrix.copy(Ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Lt===!0&&k.cameras.push(Ht)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Jt=d.getDepthInformation(pt[0]);Jt&&Jt.isValid&&Jt.texture&&x.init(Jt,s.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Jt=0;Jt<pt.length;Jt++){let ee=pt[Jt].camera;if(ee){let ue=m[ee];ue||(ue=new no,m[ee]=ue);let Ht=d.getCameraImage(ee);ue.sourceTexture=Ht}}}}for(let pt=0;pt<A.length;pt++){let Lt=C[pt],dt=A[pt];Lt!==null&&dt!==void 0&&dt.update(Lt,it,c||o)}bt&&bt(B,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}let yt=new bp;yt.setAnimationLoop(wt),this.setAnimationLoop=function(B){bt=B},this.dispose=function(){}}},nM=new qe,Cp=new de;Cp.set(-1,0,0,0,1,0,0,0,1);function iM(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,zh(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,T,L,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),d(x,m)):m.isMeshPhongMaterial?(r(x,m),p(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),h(x,m),m.isMeshPhysicalMaterial&&g(x,m,b)):m.isMeshMatcapMaterial?(r(x,m),_(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),y(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,T,L):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Cn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Cn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let T=t.get(m),L=T.envMap,b=T.envMapRotation;L&&(x.envMap.value=L,x.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Cp),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,T,L){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*T,x.scale.value=L*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function p(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function h(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function g(x,m,T){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){let T=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let C=A.program;i.uniformBlockBinding(b,C)}function c(b,A){let C=s[b.id];C===void 0&&(x(b),C=p(b),s[b.id]=C,b.addEventListener("dispose",T));let N=A.program;i.updateUBOMapping(b,N);let M=t.render.frame;r[b.id]!==M&&(h(b),r[b.id]=M)}function p(b){let A=d();b.__bindingPointIndex=A;let C=n.createBuffer(),N=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,C),C}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let A=s[b.id],C=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let M=0,E=C.length;M<E;M++){let I=C[M];if(Array.isArray(I))for(let z=0,q=I.length;z<q;z++)g(I[z],M,z,N);else g(I,M,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,A,C,N){if(y(b,A,C,N)===!0){let M=b.__offset,E=b.value;if(Array.isArray(E)){let I=0;for(let z=0;z<E.length;z++){let q=E[z],k=m(q);_(q,b.__data,I),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function _(b,A,C){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,C)}function y(b,A,C,N){let M=b.value,E=A+"_"+C;if(N[E]===void 0)return typeof M=="number"||typeof M=="boolean"?N[E]=M:ArrayBuffer.isView(M)?N[E]=M.slice():N[E]=M.clone(),!0;{let I=N[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return N[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function x(b){let A=b.uniforms,C=0,N=16;for(let E=0,I=A.length;E<I;E++){let z=Array.isArray(A[E])?A[E]:[A[E]];for(let q=0,k=z.length;q<k;q++){let O=z[q],V=Array.isArray(O.value)?O.value:[O.value];for(let K=0,J=V.length;K<J;K++){let nt=V[K],$=m(nt),Q=C%N,st=Q%$.boundary,mt=Q+st;C+=st,mt!==0&&N-mt<$.storage&&(C+=N-mt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=C,C+=$.storage}}}let M=C%N;return M>0&&(C+=N-M),b.__size=C,b.__cache={},this}function m(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):re("WebGLRenderer: Unsupported uniform value type.",b),A}function T(b){let A=b.target;A.removeEventListener("dispose",T);let C=o.indexOf(A.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function L(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:L}}var rM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function oM(){return bi===null&&(bi=new Va(rM,16,16,hs,oi),bi.name="DFG_LUT",bi.minFilter=sn,bi.magFilter=sn,bi.wrapS=gi,bi.wrapT=gi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Ql=class{constructor(t={}){let{canvas:e=qd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:g=On}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let y=g,x=new Set([gl,ml,pl]),m=new Set([On,si,or,ar,fl,dl]),T=new Uint32Array(4),L=new Int32Array(4),b=new Z,A=null,C=null,N=[],M=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,z=!1,q=null,k=null,O=null,V=null;this._outputColorSpace=nn;let K=0,J=0,nt=null,$=-1,Q=null,st=new Ze,mt=new Ze,xt=null,bt=new le(0),wt=0,yt=e.width,B=e.height,it=1,pt=null,Lt=null,dt=new Ze(0,0,yt,B),Vt=new Ze(0,0,yt,B),Qt=!1,Jt=new Qr,ee=!1,ue=!1,Ht=new qe,oe=new Z,Be=new Ze,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Pe(){return nt===null?it:1}let H=i;function Ge(w,G){return e.getContext(w,G)}let Me,D,v,Y,et,at,Tt,It,lt,ft,At,$t,Ct,Et,qt,ne,ce,W,Rt,ut,Pt,Ot,gt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",un,!1),H===null){let G="webgl2";if(H=Ge(G,w),H===null)throw Ge(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(w){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),ae("WebGLRenderer: "+w.message),w}function Zt(){Me=new dy(H),Me.init(),Pt=new Qv(H,Me),D=new iy(H,Me,t,Pt),v=new Kv(H,Me),D.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),k=H.createFramebuffer(),O=H.createFramebuffer(),V=H.createFramebuffer(),Y=new gy(H),et=new Ov,at=new jv(H,Me,v,et,D,Pt,Y),Tt=new fy(I),It=new _g(H),Ot=new ey(H,It),lt=new py(H,It,Y,Ot),ft=new _y(H,lt,It,Ot,Y),W=new xy(H,D,at),qt=new sy(et),At=new Fv(I,Tt,Me,D,Ot,qt),$t=new iM(I,et),Ct=new zv,Et=new Xv(Me),ce=new ty(I,Tt,v,ft,_,l),ne=new Jv(I,ft,D),gt=new sM(H,Y,D,v),Rt=new ny(H,Me,Y),ut=new my(H,Me,Y),Y.programs=At.programs,I.capabilities=D,I.extensions=Me,I.properties=et,I.renderLists=Ct,I.shadowMap=ne,I.state=v,I.info=Y}y!==On&&(E=new vy(y,e.width,e.height,a,s,r));let Yt=new lu(I,H);this.xr=Yt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(yt,B,!1))},this.getSize=function(w){return w.set(yt,B)},this.setSize=function(w,G,rt=!0){if(Yt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,B=G,e.width=Math.floor(w*it),e.height=Math.floor(G*it),rt===!0&&(e.style.width=w+"px",e.style.height=G+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(yt*it,B*it).floor()},this.setDrawingBufferSize=function(w,G,rt){yt=w,B=G,it=rt,e.width=Math.floor(w*rt),e.height=Math.floor(G*rt),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(y===On){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(st)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,G,rt,tt){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,G,rt,tt),v.viewport(st.copy(dt).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,G,rt,tt){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,G,rt,tt),v.scissor(mt.copy(Vt).multiplyScalar(it).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){v.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){Lt=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,rt=!0){let tt=0;if(w){let j=!1;if(nt!==null){let Dt=nt.texture.format;j=x.has(Dt)}if(j){let Dt=nt.texture.type,zt=m.has(Dt),Ut=ce.getClearColor(),Wt=ce.getClearAlpha(),Kt=Ut.r,fe=Ut.g,me=Ut.b;zt?(T[0]=Kt,T[1]=fe,T[2]=me,T[3]=Wt,H.clearBufferuiv(H.COLOR,0,T)):(L[0]=Kt,L[1]=fe,L[2]=me,L[3]=Wt,H.clearBufferiv(H.COLOR,0,L))}else tt|=H.COLOR_BUFFER_BIT}G&&(tt|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&H.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),q=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),ce.dispose(),Ct.dispose(),Et.dispose(),et.dispose(),Tt.dispose(),ft.dispose(),Ot.dispose(),gt.dispose(),At.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ar),Yt.removeEventListener("sessionend",Dn),ui.stop()};function Le(w){w.preventDefault(),qr("WebGLRenderer: Context Lost."),z=!0}function xe(){qr("WebGLRenderer: Context Restored."),z=!1;let w=Y.autoReset,G=ne.enabled,rt=ne.autoUpdate,tt=ne.needsUpdate,j=ne.type;Zt(),Y.autoReset=w,ne.enabled=G,ne.autoUpdate=rt,ne.needsUpdate=tt,ne.type=j}function un(w){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){let G=w.target;G.removeEventListener("dispose",St),Nt(G)}function Nt(w){wc(w),et.remove(w)}function wc(w){let G=et.get(w).programs;G!==void 0&&(G.forEach(function(rt){At.releaseProgram(rt)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,rt,tt,j,Dt){G===null&&(G=Ve);let zt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ut=$n(w,G,rt,tt,j);v.setMaterial(tt,zt);let Wt=rt.index,Kt=1;if(tt.wireframe===!0){if(Wt=lt.getWireframeAttribute(rt),Wt===void 0)return;Kt=2}let fe=rt.drawRange,me=rt.attributes.position,Xt=fe.start*Kt,Ee=(fe.start+fe.count)*Kt;Dt!==null&&(Xt=Math.max(Xt,Dt.start*Kt),Ee=Math.min(Ee,(Dt.start+Dt.count)*Kt)),Wt!==null?(Xt=Math.max(Xt,0),Ee=Math.min(Ee,Wt.count)):me!=null&&(Xt=Math.max(Xt,0),Ee=Math.min(Ee,me.count));let Xe=Ee-Xt;if(Xe<0||Xe===1/0)return;Ot.setup(j,tt,Ut,rt,Wt);let ke,Ne=Rt;if(Wt!==null&&(ke=It.get(Wt),Ne=ut,Ne.setIndex(ke)),j.isMesh)tt.wireframe===!0?(v.setLineWidth(tt.wireframeLinewidth*Pe()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(j.isLine){let tn=tt.linewidth;tn===void 0&&(tn=1),v.setLineWidth(tn*Pe()),j.isLineSegments?Ne.setMode(H.LINES):j.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else j.isPoints?Ne.setMode(H.POINTS):j.isSprite&&Ne.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let tn=j._multiDrawStarts,Bt=j._multiDrawCounts,fn=j._multiDrawCount,be=Wt?It.get(Wt).bytesPerElement:1,Rn=et.get(tt).currentProgram.getUniforms();for(let In=0;In<fn;In++)Rn.setValue(H,"_gl_DrawID",In),Ne.render(tn[In]/be,Bt[In])}else if(j.isInstancedMesh)Ne.renderInstances(Xt,Xe,j.count);else if(rt.isInstancedBufferGeometry){let tn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Bt=Math.min(rt.instanceCount,tn);Ne.renderInstances(Xt,Xe,Bt)}else Ne.render(Xt,Xe)};function Ye(w,G,rt,tt){q!==null&&w.isNodeMaterial&&q.setObject(tt,w),ee===!0&&qt.setState(w,rt,!1),w.transparent===!0&&w.side===Wn&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,ds(w,G,tt),w.side=os,w.needsUpdate=!0,ds(w,G,tt),w.side=Wn):ds(w,G,tt)}this.compile=function(w,G,rt=null){rt===null&&(rt=w),q!==null&&q.renderStart(w,G,rt),C=Et.get(rt),C.init(G),M.push(C),rt.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),w!==rt&&w.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),C.setupLights(),q!==null&&q.updateLights(C.state.lightsArray),ue=this.localClippingEnabled,ee=qt.init(this.clippingPlanes,ue),ee===!0&&qt.setGlobalState(this.clippingPlanes,G),q!==null&&ne.render(C.state.shadowsArray,rt,G);let tt=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Dt=j.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){let Ut=Dt[zt];Ye(Ut,rt,G,j),tt.add(Ut)}else Ye(Dt,rt,G,j),tt.add(Dt)}),C=M.pop(),q!==null&&q.renderEnd(),tt},this.compileAsync=function(w,G,rt=null){let tt=this.compile(w,G,rt);return new Promise(j=>{function Dt(){if(tt.forEach(function(zt){let Wt=et.get(zt).currentProgram;(Wt===void 0||Wt.isReady())&&tt.delete(zt)}),tt.size===0){j(w);return}setTimeout(Dt,10)}Me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let wr=null;function Ac(w){wr&&wr(w)}function Ar(){ui.stop()}function Dn(){ui.start()}let ui=new bp;ui.setAnimationLoop(Ac),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(w){wr=w,Yt.setAnimationLoop(w),w===null?ui.stop():ui.start()},Yt.addEventListener("sessionstart",Ar),Yt.addEventListener("sessionend",Dn),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;q!==null&&q.renderStart(w,G);let rt=Yt.enabled===!0&&Yt.isPresenting===!0,tt=E!==null&&(nt===null||rt)&&E.begin(I,nt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(G),G=Yt.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,G,nt),C=Et.get(w,M.length),C.init(G),C.state.textureUnits=at.getTextureUnits(),M.push(C),Ht.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Jt.setFromProjectionMatrix(Ht,ni,G.reversedDepth),ue=this.localClippingEnabled,ee=qt.init(this.clippingPlanes,ue),A=Ct.get(w,N.length),A.init(),N.push(A),Yt.enabled===!0&&Yt.isPresenting===!0){let zt=I.xr.getDepthSensingMesh();zt!==null&&Ri(zt,G,-1/0,I.sortObjects)}Ri(w,G,0,I.sortObjects),A.finish(),q!==null&&q.updateLights(C.state.lightsArray),I.sortObjects===!0&&A.sort(pt,Lt),Te=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,Te&&ce.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&qt.beginShadows();let j=C.state.shadowsArray;if(ne.render(j,w,G),ee===!0&&qt.endShadows(),(tt&&E.hasRenderPass())===!1){let zt=A.opaque,Ut=A.transmissive;if(C.setupLights(),G.isArrayCamera){let Wt=G.cameras;if(Ut.length>0)for(let Kt=0,fe=Wt.length;Kt<fe;Kt++){let me=Wt[Kt];Go(zt,Ut,w,me)}Te&&ce.render(w);for(let Kt=0,fe=Wt.length;Kt<fe;Kt++){let me=Wt[Kt];Er(A,w,me,me.viewport)}}else Ut.length>0&&Go(zt,Ut,w,G),Te&&ce.render(w),Er(A,w,G)}nt!==null&&J===0&&(at.updateMultisampleRenderTarget(nt),at.updateRenderTargetMipmap(nt)),tt&&E.end(I),w.isScene===!0&&w.onAfterRender(I,w,G),Ot.resetDefaultState(),$=-1,Q=null,M.pop(),M.length>0?(C=M[M.length-1],at.setTextureUnits(C.state.textureUnits),ee===!0&&qt.setGlobalState(I.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,q!==null&&q.renderEnd()};function Ri(w,G,rt,tt){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)C.pushLightProbeGrid(w);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Jt)){tt&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ht);let zt=ft.update(w),Ut=w.material;Ut.visible&&A.push(w,zt,Ut,rt,Be.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Jt))){let zt=ft.update(w),Ut=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Be.copy(zt.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ut)){let Wt=zt.groups;for(let Kt=0,fe=Wt.length;Kt<fe;Kt++){let me=Wt[Kt],Xt=Ut[me.materialIndex];Xt&&Xt.visible&&A.push(w,zt,Xt,rt,Be.z,me,G)}}else Ut.visible&&A.push(w,zt,Ut,rt,Be.z,null,G)}}let Dt=w.children;for(let zt=0,Ut=Dt.length;zt<Ut;zt++)Ri(Dt[zt],G,rt,tt)}function Er(w,G,rt,tt){let{opaque:j,transmissive:Dt,transparent:zt}=w;C.setupLightsView(rt),ee===!0&&qt.setGlobalState(I.clippingPlanes,rt),tt&&v.viewport(st.copy(tt)),j.length>0&&Cs(j,G,rt),Dt.length>0&&Cs(Dt,G,rt),zt.length>0&&Cs(zt,G,rt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Go(w,G,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[tt.id]===void 0){let Xt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[tt.id]=new Pn(1,1,{generateMipmaps:!0,type:Xt?oi:On,minFilter:ls,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let Dt=C.state.transmissionRenderTarget[tt.id],zt=tt.viewport||st;Dt.setSize(zt.z*I.transmissionResolutionScale,zt.w*I.transmissionResolutionScale);let Ut=I.getRenderTarget(),Wt=I.getActiveCubeFace(),Kt=I.getActiveMipmapLevel();I.setRenderTarget(Dt),I.getClearColor(bt),wt=I.getClearAlpha(),wt<1&&I.setClearColor(16777215,.5),I.clear(),Te&&ce.render(rt);let fe=I.toneMapping;I.toneMapping=ii;let me=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),C.setupLightsView(tt),ee===!0&&qt.setGlobalState(I.clippingPlanes,tt),Cs(w,rt,tt),at.updateMultisampleRenderTarget(Dt),at.updateRenderTargetMipmap(Dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ee=0,Xe=G.length;Ee<Xe;Ee++){let ke=G[Ee],{object:Ne,geometry:tn,material:Bt,group:fn}=ke;if(Bt.side===Wn&&Ne.layers.test(tt.layers)){let be=Bt.side;Bt.side=Cn,Bt.needsUpdate=!0,Ce(Ne,rt,tt,tn,Bt,fn),Bt.side=be,Bt.needsUpdate=!0,Xt=!0}}Xt===!0&&(at.updateMultisampleRenderTarget(Dt),at.updateRenderTargetMipmap(Dt))}I.setRenderTarget(Ut,Wt,Kt),I.setClearColor(bt,wt),me!==void 0&&(tt.viewport=me),I.toneMapping=fe}function Cs(w,G,rt){let tt=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Dt=w.length;j<Dt;j++){let zt=w[j],{object:Ut,geometry:Wt,group:Kt}=zt,fe=zt.material;fe.allowOverride===!0&&tt!==null&&(fe=tt),Ut.layers.test(rt.layers)&&Ce(Ut,G,rt,Wt,fe,Kt)}}function Ce(w,G,rt,tt,j,Dt){q!==null&&j.isNodeMaterial&&q.setObject(w,j),w.onBeforeRender(I,G,rt,tt,j,Dt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(I,G,rt,tt,w,Dt),j.transparent===!0&&j.side===Wn&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,I.renderBufferDirect(rt,G,tt,j,w,Dt),j.side=os,j.needsUpdate=!0,I.renderBufferDirect(rt,G,tt,j,w,Dt),j.side=Wn):I.renderBufferDirect(rt,G,tt,j,w,Dt),w.onAfterRender(I,G,rt,tt,j,Dt)}function ds(w,G,rt){G.isScene!==!0&&(G=Ve);let tt=et.get(w),j=C.state.lights,Dt=C.state.shadowsArray,zt=j.state.version,Ut=At.getParameters(w,j.state,Dt,G,rt,C.state.lightProbeGridArray),Wt=At.getProgramCacheKey(Ut),Kt=tt.programs;tt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,tt.fog=G.fog;let fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;tt.envMap=Tt.get(w.envMap||tt.environment,fe),tt.envMapRotation=tt.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",St),Kt=new Map,tt.programs=Kt);let me=Kt.get(Wt);if(me!==void 0){if(tt.currentProgram===me&&tt.lightsStateVersion===zt)return Rs(w,Ut),me}else Ut.uniforms=At.getUniforms(w),q!==null&&w.isNodeMaterial&&q.build(w,rt,Ut),w.onBeforeCompile(Ut,I),me=At.acquireProgram(Ut,Wt),Kt.set(Wt,me),tt.uniforms=Ut.uniforms;let Xt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=qt.uniform),Rs(w,Ut),tt.needsLights=ps(w),tt.lightsStateVersion=zt,tt.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.sunLights.value=j.state.sun,Xt.sunLightShadows.value=j.state.sunShadow,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.sunShadowMatrix.value=j.state.sunShadowMatrix,Xt.sunShadowCascade.value=j.state.sunShadowCascade,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),tt.lightProbeGrid=C.state.lightProbeGridArray.length>0,tt.currentProgram=me,tt.uniformsList=null,me}function Ho(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=hr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Rs(w,G){let rt=et.get(w);rt.outputColorSpace=G.outputColorSpace,rt.batching=G.batching,rt.batchingColor=G.batchingColor,rt.instancing=G.instancing,rt.instancingColor=G.instancingColor,rt.instancingMorph=G.instancingMorph,rt.skinning=G.skinning,rt.morphTargets=G.morphTargets,rt.morphNormals=G.morphNormals,rt.morphColors=G.morphColors,rt.morphTargetsCount=G.morphTargetsCount,rt.numClippingPlanes=G.numClippingPlanes,rt.numIntersection=G.numClipIntersection,rt.vertexAlphas=G.vertexAlphas,rt.vertexTangents=G.vertexTangents,rt.toneMapping=G.toneMapping}function Ec(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let rt=0,tt=w.length;rt<tt;rt++){let j=w[rt];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function $n(w,G,rt,tt,j){G.isScene!==!0&&(G=Ve),at.resetTextureUnits();let Dt=G.fog,zt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?G.environment:null,Ut=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Se.workingColorSpace,Wt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Kt=Tt.get(tt.envMap||zt,Wt),fe=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,me=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Xt=!!rt.morphAttributes.position,Ee=!!rt.morphAttributes.normal,Xe=!!rt.morphAttributes.color,ke=ii;tt.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ke=I.toneMapping);let Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,tn=Ne!==void 0?Ne.length:0,Bt=et.get(tt),fn=C.state.lights;if(ee===!0&&(ue===!0||w!==Q)){let Ue=w===Q&&tt.id===$;qt.setState(tt,w,Ue)}let be=!1;tt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==fn.state.version||Bt.outputColorSpace!==Ut||j.isBatchedMesh&&Bt.batching===!1||!j.isBatchedMesh&&Bt.batching===!0||j.isBatchedMesh&&Bt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Bt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Bt.instancing===!1||!j.isInstancedMesh&&Bt.instancing===!0||j.isSkinnedMesh&&Bt.skinning===!1||!j.isSkinnedMesh&&Bt.skinning===!0||j.isInstancedMesh&&Bt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Bt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Bt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Bt.instancingMorph===!1&&j.morphTexture!==null||Bt.envMap!==Kt||tt.fog===!0&&Bt.fog!==Dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==qt.numPlanes||Bt.numIntersection!==qt.numIntersection)||Bt.vertexAlphas!==fe||Bt.vertexTangents!==me||Bt.morphTargets!==Xt||Bt.morphNormals!==Ee||Bt.morphColors!==Xe||Bt.toneMapping!==ke||Bt.morphTargetsCount!==tn||!!Bt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Bt.__version=tt.version);let Rn=Bt.currentProgram;be===!0&&(Rn=ds(tt,G,j),q&&tt.isNodeMaterial&&q.onUpdateProgram(tt,Rn,Bt));let In=!1,fi=!1,Wi=!1,pe=Rn.getUniforms(),he=Bt.uniforms;if(v.useProgram(Rn.program)&&(In=!0,fi=!0,Wi=!0),tt.id!==$&&($=tt.id,fi=!0),Bt.needsLights){let Ue=Ec(C.state.lightProbeGridArray,j);Bt.lightProbeGrid!==Ue&&(Bt.lightProbeGrid=Ue,fi=!0)}if(In||Q!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pe.setValue(H,"projectionMatrix",w.projectionMatrix),pe.setValue(H,"viewMatrix",w.matrixWorldInverse);let Jn=pe.map.cameraPosition;Jn!==void 0&&Jn.setValue(H,oe.setFromMatrixPosition(w.matrixWorld)),D.logarithmicDepthBuffer&&pe.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&pe.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,fi=!0,Wi=!0)}if(Bt.needsLights&&(fn.state.sunShadowMap.length>0&&pe.setValue(H,"sunShadowMap",fn.state.sunShadowMap,at),fn.state.directionalShadowMap.length>0&&pe.setValue(H,"directionalShadowMap",fn.state.directionalShadowMap,at),fn.state.spotShadowMap.length>0&&pe.setValue(H,"spotShadowMap",fn.state.spotShadowMap,at),fn.state.pointShadowMap.length>0&&pe.setValue(H,"pointShadowMap",fn.state.pointShadowMap,at)),j.isSkinnedMesh){pe.setOptional(H,j,"bindMatrix"),pe.setOptional(H,j,"bindMatrixInverse");let Ue=j.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),pe.setValue(H,"boneTexture",Ue.boneTexture,at))}j.isBatchedMesh&&(pe.setOptional(H,j,"batchingTexture"),pe.setValue(H,"batchingTexture",j._matricesTexture,at),pe.setOptional(H,j,"batchingIdTexture"),pe.setValue(H,"batchingIdTexture",j._indirectTexture,at),pe.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&pe.setValue(H,"batchingColorTexture",j._colorsTexture,at));let Zn=rt.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&W.update(j,rt,Rn),(fi||Bt.receiveShadow!==j.receiveShadow)&&(Bt.receiveShadow=j.receiveShadow,pe.setValue(H,"receiveShadow",j.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&G.environment!==null&&(he.envMapIntensity.value=G.environmentIntensity),he.dfgLUT!==void 0&&(he.dfgLUT.value=oM()),fi){if(pe.setValue(H,"toneMappingExposure",I.toneMappingExposure),Bt.needsLights&&Is(he,Wi),Dt&&tt.fog===!0&&$t.refreshFogUniforms(he,Dt),$t.refreshMaterialUniforms(he,tt,it,B,C.state.transmissionRenderTarget[w.id]),Bt.needsLights&&Bt.lightProbeGrid){let Ue=Bt.lightProbeGrid;he.probesSH.value=Ue.texture,he.probesMin.value.copy(Ue.boundingBox.min),he.probesMax.value.copy(Ue.boundingBox.max),he.probesResolution.value.copy(Ue.resolution)}hr.upload(H,Ho(Bt),he,at)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(hr.upload(H,Ho(Bt),he,at),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&pe.setValue(H,"center",j.center),pe.setValue(H,"modelViewMatrix",j.modelViewMatrix),pe.setValue(H,"normalMatrix",j.normalMatrix),pe.setValue(H,"modelMatrix",j.matrixWorld),tt.uniformsGroups!==void 0){let Ue=tt.uniformsGroups;for(let Jn=0,Sn=Ue.length;Jn<Sn;Jn++){let Ps=Ue[Jn];gt.update(Ps,Rn),gt.bind(Ps,Rn)}}return Rn}function Is(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function ps(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(w,G,rt){let tt=et.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),et.get(w.texture).__webglTexture=G,et.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let rt=et.get(w);rt.__webglFramebuffer=G,rt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,rt=0){nt=w,K=G,J=rt;let tt=null,j=!1,Dt=!1;if(w){let Ut=et.get(w);if(Ut.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Ut.__webglFramebuffer),st.copy(w.viewport),mt.copy(w.scissor),xt=w.scissorTest,v.viewport(st),v.scissor(mt),v.setScissorTest(xt),$=-1;return}else if(Ut.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Ut.__hasExternalTextures)at.rebindTextures(w,et.get(w.texture).__webglTexture,et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let fe=w.depthTexture;if(Ut.__boundDepthTexture!==fe){if(fe!==null&&et.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);let Kt=et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[G])?tt=Kt[G][rt]:tt=Kt[G],j=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?tt=et.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?tt=Kt[rt]:tt=Kt,st.copy(w.viewport),mt.copy(w.scissor),xt=w.scissorTest}else st.copy(dt).multiplyScalar(it).floor(),mt.copy(Vt).multiplyScalar(it).floor(),xt=Qt;if(rt!==0&&(tt=k),v.bindFramebuffer(H.FRAMEBUFFER,tt)&&v.drawBuffers(w,tt),v.viewport(st),v.scissor(mt),v.setScissorTest(xt),j){let Ut=et.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,rt)}else if(Dt){let Ut=G;for(let Wt=0;Wt<w.textures.length;Wt++){let Kt=et.get(w.textures[Wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Wt,Kt.__webglTexture,rt,Ut)}}else if(w!==null&&rt!==0){let Ut=et.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ut.__webglTexture,rt)}$=-1};function Tr(w){let G=et.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=D.textureFormatReadable(w.format),G.__typeReadable=D.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,rt,tt,j,Dt,zt,Ut=0){if(!(w&&w.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){v.bindFramebuffer(H.FRAMEBUFFER,Wt);try{let Kt=w.textures[Ut],fe=Kt.format,me=Kt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let Xt=Tr(Kt);if(Xt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-tt&&rt>=0&&rt<=w.height-j&&H.readPixels(G,rt,tt,j,Pt.convert(fe),Pt.convert(me),Dt)}finally{let Kt=nt!==null?et.get(nt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,G,rt,tt,j,Dt,zt,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt)if(G>=0&&G<=w.width-tt&&rt>=0&&rt<=w.height-j){v.bindFramebuffer(H.FRAMEBUFFER,Wt);let Kt=w.textures[Ut],fe=Kt.format,me=Kt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let Xt=Tr(Kt);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ee),H.bufferData(H.PIXEL_PACK_BUFFER,Dt.byteLength,H.STREAM_READ),H.readPixels(G,rt,tt,j,Pt.convert(fe),Pt.convert(me),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Xe=nt!==null?et.get(nt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Xe);let ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await $d(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ee),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Dt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ee),H.deleteSync(ke),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,rt=0){let tt=Math.pow(2,-rt),j=Math.floor(w.image.width*tt),Dt=Math.floor(w.image.height*tt),zt=G!==null?G.x:0,Ut=G!==null?G.y:0;at.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,zt,Ut,j,Dt),v.unbindTexture()},this.copyTextureToTexture=function(w,G,rt=null,tt=null,j=0,Dt=0){let zt,Ut,Wt,Kt,fe,me,Xt,Ee,Xe,ke=w.isCompressedTexture?w.mipmaps[Dt]:w.image;if(rt!==null)zt=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Wt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,fe=rt.min.y,me=rt.isBox3?rt.min.z:0;else{let he=Math.pow(2,-j);zt=Math.floor(ke.width*he),Ut=Math.floor(ke.height*he),w.isDataArrayTexture?Wt=ke.depth:w.isData3DTexture?Wt=Math.floor(ke.depth*he):Wt=1,Kt=0,fe=0,me=0}tt!==null?(Xt=tt.x,Ee=tt.y,Xe=tt.z):(Xt=0,Ee=0,Xe=0);let Ne=Pt.convert(G.format),tn=Pt.convert(G.type),Bt;G.isData3DTexture?(at.setTexture3D(G,0),Bt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),Bt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),Bt=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let fn=v.getParameter(H.UNPACK_ROW_LENGTH),be=v.getParameter(H.UNPACK_IMAGE_HEIGHT),Rn=v.getParameter(H.UNPACK_SKIP_PIXELS),In=v.getParameter(H.UNPACK_SKIP_ROWS),fi=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,ke.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ke.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),v.pixelStorei(H.UNPACK_SKIP_ROWS,fe),v.pixelStorei(H.UNPACK_SKIP_IMAGES,me);let Wi=w.isDataArrayTexture||w.isData3DTexture,pe=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let he=et.get(w),Zn=et.get(G),Ue=et.get(he.__renderTarget),Jn=et.get(Zn.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Ue.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Sn=0;Sn<Wt;Sn++)Wi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.get(w).__webglTexture,j,me+Sn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.get(G).__webglTexture,Dt,Xe+Sn)),H.blitFramebuffer(Kt,fe,zt,Ut,Xt,Ee,zt,Ut,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||et.has(w)){let he=et.get(w),Zn=et.get(G);v.bindFramebuffer(H.READ_FRAMEBUFFER,O),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,V);for(let Ue=0;Ue<Wt;Ue++)Wi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,he.__webglTexture,j,me+Ue):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,he.__webglTexture,j),pe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zn.__webglTexture,Dt,Xe+Ue):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Zn.__webglTexture,Dt),j!==0?H.blitFramebuffer(Kt,fe,zt,Ut,Xt,Ee,zt,Ut,H.COLOR_BUFFER_BIT,H.NEAREST):pe?H.copyTexSubImage3D(Bt,Dt,Xt,Ee,Xe+Ue,Kt,fe,zt,Ut):H.copyTexSubImage2D(Bt,Dt,Xt,Ee,Kt,fe,zt,Ut);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Bt,Dt,Xt,Ee,Xe,zt,Ut,Wt,Ne,tn,ke.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Dt,Xt,Ee,Xe,zt,Ut,Wt,Ne,ke.data):H.texSubImage3D(Bt,Dt,Xt,Ee,Xe,zt,Ut,Wt,Ne,tn,ke):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Dt,Xt,Ee,zt,Ut,Ne,tn,ke.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Dt,Xt,Ee,ke.width,ke.height,Ne,ke.data):H.texSubImage2D(H.TEXTURE_2D,Dt,Xt,Ee,zt,Ut,Ne,tn,ke);v.pixelStorei(H.UNPACK_ROW_LENGTH,fn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Rn),v.pixelStorei(H.UNPACK_SKIP_ROWS,In),v.pixelStorei(H.UNPACK_SKIP_IMAGES,fi),Dt===0&&G.generateMipmaps&&H.generateMipmap(Bt),v.unbindTexture()},this.initRenderTarget=function(w){et.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){K=0,J=0,nt=null,v.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var aM=["top","side","bottom"],lM={slab_bottom:1,slab_top:1,stairs:1},Rp=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function cM(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Rp[n.facing|0]]:null}function Ip(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let E of t){if(!E||typeof E.id!="string")throw new Error("block without id");if(!Number.isInteger(E.n)||E.n<0||E.n>255)throw new Error("bad n for "+E.id);if(i[E.n])throw new Error("duplicate n "+E.n+" ("+E.id+")");if(s[E.id])throw new Error("duplicate id "+E.id);let I=E.colors||{},z=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},E);if(z.placeable=z.n!==0&&!z.liquid,z.colors={top:I.top||"#888888",side:I.side||I.top||"#888888",bottom:I.bottom||I.top||"#888888"},z.opaque=z.solid&&!z.transparent&&!z.cutout&&!lM[z.shape],z.tile={},z.tileOf&&s[z.tileOf])z.tile=Object.assign({},s[z.tileOf].tile);else if(z.n!==0){let q={};for(let k of aM){let O=z.colors[k]+"|"+(z.pattern==="grass"||z.pattern==="log"||z.pattern==="lamp"||z.pattern==="table"||z.pattern==="stele"||z.pattern==="torch"||z.pattern==="bed"||z.pattern==="snow"||z.pattern==="lantern"||z.pattern==="bookshelf"||z.pattern==="hay"||z.pattern==="barrel"||z.pattern==="chest"||z.pattern==="farmland"?k:"");q[O]===void 0&&(q[O]=r.length,r.push({block:z.id,face:k,color:z.colors[k],pattern:z.pattern,accent:z.accent||null,top:z.colors.top})),z.tile[k]=q[O]}}i[z.n]=z,s[z.id]=z}if(!s.air)throw new Error("registry needs air");for(let E of e){if(s[E.id])throw new Error("duplicate id "+E.id);s[E.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},E)}for(let E in s){let I=s[E].drops;if(I&&I!=="self"&&!s[I])throw new Error(E+" drops unknown "+I)}let o=E=>(typeof E=="number"?i[E]:s[E])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),p=new Uint8Array(256),d=new Uint8Array(256),h=new Uint8Array(256),g={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},_=new Uint8Array(256),y=new Array(256).fill(null),x=new Uint8Array(256),m=new Uint8Array(256),T=new Uint8Array(256),L=new Uint8Array(256),b=new Uint8Array(256),A=new Int16Array(256).fill(-1),C=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((E,I)=>{E&&(x[I]=E.solid?1:0,m[I]=E.opaque?1:0,T[I]=E.transparent?1:0,L[I]=E.emissive?1:0,b[I]=E.liquid?1:0,a[I]=E.light!=null?E.light:E.emissive?15:0,l[I]=E.liquid?2:0,c[I]=g[E.shape]||0,p[I]=E.cutout?1:0,d[I]=E.climbable?1:0,h[I]=E.plant?1:0,_[I]=E.facing|0,E.solid&&(y[I]=cM(E)),I&&(A[I]=E.tile.top,C[I]=E.tile.side,N[I]=E.tile.bottom))});let M=(n&&n.blueprints||[]).map(E=>Object.assign({kind:"blueprint"},E));return{blocks:i.filter(Boolean),items:e.map(E=>s[E.id]),blueprints:M,tiles:r,get:o,toolOf:E=>{let I=E&&s[E];return I&&I.kind==="item"&&I.tool&&typeof I.tool=="object"?I.tool:null},num:E=>{let I=s[E];if(!I||I.kind!=="block")throw new Error("no block "+E);return I.n},name:E=>{let I=o(E);return I?I.name_zh:String(E)},maxStack:E=>{let I=s[E];return I?I.maxStack:64},dropOf:E=>{let I=i[E];return!I||!I.drops?null:I.drops==="self"?I.id:I.drops},breakTime:E=>{let I=i[E];return!I||I.hardness<0?1/0:.25+I.hardness*.55},flat:{solid:x,opaque:m,trans:T,emit:L,liquid:b,tileTop:A,tileSide:C,tileBottom:N,lightEmit:a,attn:l,shape:c,cutout:p,climb:d,plant:h,facing:_,boxes:y}}}var Bi=n=>Math.floor(n/16);var ye=(n,t,e)=>(t*16+e)*16+n;var wi=(n,t)=>n+","+t,Pp=n=>n.split(",").map(Number);function cu(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Bi(n),s=Bi(e);return{cx:i,cz:s,i:ye(n-i*16,t,e-s*16)}}function Lp(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Bn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var fr=(n,t,e)=>Bn(n,t,0,e);function hM(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var hu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],uM=.5*(Math.sqrt(3)-1),Mo=(3-Math.sqrt(3))/6;function Ai(n){let t=hM(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*uM,a=Math.floor(s+o),l=Math.floor(r+o),c=(a+l)*Mo,p=s-(a-c),d=r-(l-c),h=p>d?1:0,g=1-h,_=p-h+Mo,y=d-g+Mo,x=p-1+2*Mo,m=d-1+2*Mo,T=a&255,L=l&255,b=0,A,C;return A=.5-p*p-d*d,A>0&&(C=hu[i[T+i[L]]&7],A*=A,b+=A*A*(C[0]*p+C[1]*d)),A=.5-_*_-y*y,A>0&&(C=hu[i[T+h+i[L+g]]&7],A*=A,b+=A*A*(C[0]*_+C[1]*y)),A=.5-x*x-m*m,A>0&&(C=hu[i[T+1+i[L+1]]&7],A*=A,b+=A*A*(C[0]*x+C[1]*m)),70*b}}function zi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function uu(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),l=t(e-r),c=t(i-o),p=t(s-a),d=(g,_,y)=>Bn(n,r+g,o+_,a+y),h=(g,_,y)=>g+(_-g)*y;return h(h(h(d(0,0,0),d(1,0,0),l),h(d(0,1,0),d(1,1,0),l),c),h(h(d(0,0,1),d(1,0,1),l),h(d(0,1,1),d(1,1,1),l),c),p)}}var dr=160,ai=18,fu=[[0,1],[-1,0],[0,-1],[1,0]];function Dp(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var fM=(n,t,e)=>e&1?[t,n]:[n,t];function Np(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(l,c){let p=l+","+c;if(i.has(p))return i.get(p);let d=null,h=g=>Bn(n+909,l,g,c);if(h(0)<.45&&e&&e.houses&&e.houses.length){let g=Math.floor((l+.2+h(1)*.6)*dr),_=Math.floor((c+.2+h(2)*.6)*dr),y=t.biomeOf(g,_),x=t.height(g,_),m=(y==="plains"||y==="desert")&&Math.hypot(g,_)>110;if(m&&x>s+1)for(let T=0;T<16&&m;T++)for(let L of[7,14]){let b=t.height(g+Math.round(Math.cos(T*.39)*L),_+Math.round(Math.sin(T*.39)*L));(Math.abs(b-x)>3||b<=s)&&(m=!1)}else m=!1;if(m){let T=[],L=[],b=3+Math.floor(h(3)*4),A=(C,N,M,E)=>{let I=r[C];if(!I)return null;let[z,q]=fM(I.size[0],I.size[2],E),k={tpl:C,rot:E,x0:N-(z>>1),z0:M-(q>>1),y:x,w:z,d:q,h:I.size[1]};return T.push(k),k};A("well",g,_,0),A("lamp_post",g+3,_+3,0),A("lamp_post",g-3,_-3,0);for(let C=0;C<b;C++){let N=C/b*Math.PI*2+h(10+C)*.5,M=9+h(20+C)*3,E=g+Math.round(Math.cos(N)*M),I=_+Math.round(Math.sin(N)*M),z=g-E,q=_-I,k=0,O=-1/0;fu.forEach((st,mt)=>{let xt=st[0]*z+st[1]*q;xt>O&&(O=xt,k=mt)});let V=e.houses[Math.floor(h(30+C)*e.houses.length)],K=A(V,E,I,k);if(!K)continue;let J=r[V],[nt,$]=Dp(J.door[0],J.door[1],J.size[0],J.size[2],k),Q={x:K.x0+nt+fu[k][0],z:K.z0+$+fu[k][1]};L.push({ax:g,az:_,bx:Q.x,bz:Q.z})}d={id:p,x:g,z:_,y:x,biome:y,structures:T,paths:L,villagers:2+Math.floor(h(4)*3)}}}return i.set(p,d),d}function a(l,c,p,d){let h=[];for(let g=Math.floor((c-ai)/dr);g<=Math.floor((d+ai)/dr);g++)for(let _=Math.floor((l-ai)/dr);_<=Math.floor((p+ai)/dr);_++){let y=o(_,g);y&&y.x+ai>=l&&y.x-ai<=p&&y.z+ai>=c&&y.z-ai<=d&&h.push(y)}return h}return{plan:o,around:a,chunk:(l,c)=>a(l*16,c*16,l*16+16-1,c*16+16-1)}}function Up(n,t,e,i,s,r,o){let a=t*16,l=e*16,c=(_,y)=>_>=a&&_<a+16&&y>=l&&y<l+16,p=i.biome==="desert",d=p?s.desert||{}:{},h=_=>{let y=s.palette[_];if(!y)return null;let x=d[y]||y;return r.byId(x)},g=p?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let y=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let x=0;x<=y;x++){let m=Math.round(_.ax+(_.bx-_.ax)*x/y),T=Math.round(_.az+(_.bz-_.az)*x/y);if(!c(m,T))continue;let L=o.height(m,T),b=ye(m-a,L,T-l);n[b]&&n[b]!==r.water&&(n[b]=r.path);for(let A=L+1;A<Math.min(64,L+4);A++){let C=ye(m-a,A,T-l);(n[C]===r.leaves||n[C]===r.log||A===L+1)&&(n[C]=0)}}}for(let _ of i.structures){let y=s.templates[_.tpl];if(!y)continue;let[x,,m]=y.size;for(let T=0;T<m;T++)for(let L=0;L<x;L++){let[b,A]=Dp(L,T,x,m,_.rot),C=_.x0+b,N=_.z0+A;if(!c(C,N))continue;let M=C-a,E=N-l;for(let I=_.y-1;I>Math.max(0,_.y-8);I--){let z=ye(M,I,E);if(n[z]&&n[z]!==r.water)break;n[z]=g}for(let I=_.y+y.size[1];I<Math.min(64,_.y+y.size[1]+3);I++)n[ye(M,I,E)]=0;y.layers.forEach((I,z)=>{let q=(I[T]||"")[L];if(!q||q===" ")return;let k=_.y+z;k>=64||(n[ye(M,k,E)]=q==="."?0:h(q)||0)})}}}var Ln=24;var Op={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Fp=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],pr=112;function Bp(n,t,e){let i=k=>t.num(k),s=k=>{try{return i(k)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ai(n),l=Ai(n+101),c=Ai(n+202),p=Ai(n+303),d=Ai(n+404),h=uu(n+505),g=uu(n+606);function _(k,O){let V=zi(a,k/190,O/190,3),K=zi(l,k/55,O/55,4),J=Math.max(0,zi(c,k/130,O/130,2)-.1),nt=27+V*9+K*6+J*J*75;return Math.max(4,Math.min(54,Math.floor(nt)))}let y=Ai(n+808);function x(k,O){let V=_(k,O),K=zi(y,k/900,O/900,2),J=Math.min(1,Math.max(0,(Math.hypot(k,O)-240)/80)),nt=Math.min(1,Math.max(0,(-.18-K)/.17)),$=nt*nt*(3-2*nt)*J;return $>0&&(V=Math.round(V*(1-$)+(Ln-14)*$)),V<Ln-1?Math.max(3,Math.floor(Ln-1-(Ln-1-V)*1.8)):V}function m(k,O){let V=(fr(n+3,k,O)-.5)*.025;return{t:zi(p,k/420,O/420,2)+V,u:zi(d,k/380,O/380,2)-V}}function T(k,O,V=x(k,O)){if(V<Ln-1)return"ocean";let{t:K,u:J}=m(k,O);return K<-.3?"snow":K>.28&&J<.05?"desert":J>.12?"forest":"plains"}let L=null;function b(){if(L)return L;let k=(O,V)=>{let K=x(O,V);return K>=Ln+2&&Math.abs(x(O+1,V)-K)<2&&Math.abs(x(O,V+1)-K)<2};for(let O=0;O<400;O+=2)for(let V=0;V<Math.max(1,O*2);V++){let K=V/Math.max(1,O*2)*Math.PI*2,J=Math.round(Math.cos(K)*O),nt=Math.round(Math.sin(K)*O);if(k(J,nt)&&k(J+3,nt+2))return L={x:J+.5,y:x(J,nt)+1,z:nt+.5,stele:{x:J+3,y:x(J+3,nt+2)+1,z:nt+2},portal:{x:J-3,y:Math.max(Ln+1,x(J-3,nt+2))+1,z:nt+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function A(k,O){let V=[],K=k*16,J=O*16,nt=Math.floor((K-80)/pr),$=Math.floor((K+16+80)/pr),Q=Math.floor((J-80)/pr),st=Math.floor((J+16+80)/pr);for(let mt=Q;mt<=st;mt++)for(let xt=nt;xt<=$;xt++){let bt=pt=>Bn(n+707,xt,pt,mt);if(bt(0)>.25)continue;let wt=(xt+bt(1))*pr,yt=(mt+bt(2))*pr,B=bt(3)*Math.PI,it=40+bt(4)*30;V.push({ax:wt-Math.cos(B)*it/2,az:yt-Math.sin(B)*it/2,dx:Math.cos(B)*it,dz:Math.sin(B)*it,len:it,floor:7+Math.floor(bt(5)*6),w:1.6+bt(6)*1.2})}return V}function C(k,O){let V=new Uint8Array(16384),K=k*16,J=O*16,nt=18,$=new Int16Array(nt*nt);for(let wt=-1;wt<=16;wt++)for(let yt=-1;yt<=16;yt++)$[(wt+1)*nt+yt+1]=x(K+yt,J+wt);let Q=b(),st=new Array(256);for(let wt=0;wt<16;wt++)for(let yt=0;yt<16;yt++){let B=K+yt,it=J+wt,pt=$[(wt+1)*nt+yt+1],Lt=Math.max(Math.abs($[(wt+1)*nt+yt]-pt),Math.abs($[(wt+1)*nt+yt+2]-pt),Math.abs($[wt*nt+yt+1]-pt),Math.abs($[(wt+2)*nt+yt+1]-pt))>=3,dt=st[wt*16+yt]=T(B,it,pt),Vt=pt<=Ln+1,Qt,Jt;dt==="ocean"||Vt||dt==="desert"?(Qt=r.sand,Jt=r.sand):Lt?(Qt=r.stone,Jt=r.stone):dt==="snow"?(Qt=r.snow,Jt=r.dirt):(Qt=r.grass,Jt=r.dirt);for(let ee=0;ee<=pt;ee++){let ue;if(ee===0?ue=r.bedrock:ee===pt?ue=Qt:ee>=pt-3?ue=Jt:dt==="desert"&&ee>=pt-7?ue=r.sandstone:ue=r.stone,ue===r.stone&&Lt&&ee>=pt-4){let Ht=Bn(n,B,ee,it);Ht<.06?ue=r.coal:Ht<.09?ue=r.iron:Ht<.096&&(ue=r.ruby)}V[ye(yt,ee,wt)]=ue}for(let ee=pt+1;ee<=Ln;ee++)V[ye(yt,ee,wt)]=ee===Ln&&dt==="snow"?r.ice:r.water}N(V,k,O,$,nt);for(let wt=0;wt<Fp.length;wt++){let yt=Fp[wt],B=r[yt.ore];for(let it=0;it<yt.count;it++){let pt=Qt=>Bn(n+31*wt+Qt,k*977+it,Qt,O*131+it);if(pt(9)>yt.chance)continue;let Lt=Math.floor(pt(1)*16),dt=yt.y0+Math.floor(pt(2)*(yt.y1-yt.y0)),Vt=Math.floor(pt(3)*16);for(let Qt=0;Qt<yt.size;Qt++){Lt>=0&&Lt<16&&Vt>=0&&Vt<16&&dt>0&&dt<64&&V[ye(Lt,dt,Vt)]===r.stone&&(V[ye(Lt,dt,Vt)]=B);let Jt=Math.floor(pt(10+Qt)*6);Jt===0?Lt++:Jt===1?Lt--:Jt===2?dt++:Jt===3?dt--:Jt===4?Vt++:Vt--}}}let mt=e?q.chunk(k,O):[];M(V,k,O,$,nt,st,Q,mt);for(let wt of mt)Up(V,k,O,wt,e,r,z);let xt=Q.stele;if(Math.floor(xt.x/16)===k&&Math.floor(xt.z/16)===O){let wt=xt.x-K,yt=xt.z-J;V[ye(wt,xt.y,yt)]=r.stele,V[ye(wt,xt.y+1,yt)]=r.stele}let bt=Q.portal;if(r.portal&&bt&&Math.floor(bt.x/16)===k&&Math.floor(bt.z/16)===O){let wt=bt.x-K,yt=bt.z-J;for(let B=Math.max(1,bt.y-3);B<bt.y;B++)(!V[ye(wt,B,yt)]||V[ye(wt,B,yt)]===r.water)&&(V[ye(wt,B,yt)]=r.stone);V[ye(wt,bt.y,yt)]=r.portal,V[ye(wt,bt.y+1,yt)]=r.portal}return V}function N(k,O,V,K,J){let nt=O*16,$=V*16,Q=4,st=16/Q+1,mt=64/Q+1,xt=new Float32Array(st*st*mt);for(let yt=0;yt<mt;yt++)for(let B=0;B<st;B++)for(let it=0;it<st;it++){let pt=nt+it*Q,Lt=yt*Q,dt=$+B*Q,Vt=h(pt/22,Lt/14,dt/22)-.5,Qt=g(pt/22,Lt/14,dt/22)-.5;xt[(yt*st+B)*st+it]=Vt*Vt+Qt*Qt}let bt=(yt,B,it)=>xt[(B*st+it)*st+yt],wt=A(O,V);for(let yt=0;yt<16;yt++)for(let B=0;B<16;B++){let it=K[(yt+1)*J+B+1],pt=it<=Ln+1,Lt=pt?it-5:it,dt=B>>2,Vt=yt>>2,Qt=(B&3)/Q,Jt=(yt&3)/Q;for(let Ht=3;Ht<=Lt;Ht++){let oe=Ht>>2,Be=(Ht&3)/Q,Ve=bt(dt,oe,Vt)+(bt(dt+1,oe,Vt)-bt(dt,oe,Vt))*Qt,Te=bt(dt,oe,Vt+1)+(bt(dt+1,oe,Vt+1)-bt(dt,oe,Vt+1))*Qt,Pe=bt(dt,oe+1,Vt)+(bt(dt+1,oe+1,Vt)-bt(dt,oe+1,Vt))*Qt,H=bt(dt,oe+1,Vt+1)+(bt(dt+1,oe+1,Vt+1)-bt(dt,oe+1,Vt+1))*Qt;if((Ve+(Te-Ve)*Jt)*(1-Be)+(Pe+(H-Pe)*Jt)*Be<.008){let Me=ye(B,Ht,yt);k[Me]!==r.bedrock&&k[Me]!==r.water&&(k[Me]=0)}}if(!wt.length||pt)continue;let ee=nt+B,ue=$+yt;for(let Ht of wt){let oe=Math.max(0,Math.min(1,((ee-Ht.ax)*Ht.dx+(ue-Ht.az)*Ht.dz)/(Ht.len*Ht.len))),Be=Ht.ax+Ht.dx*oe,Ve=Ht.az+Ht.dz*oe,Te=Math.hypot(ee-Be,ue-Ve),Pe=Ht.w*Math.sin(Math.PI*oe);if(Te<Pe)for(let H=Ht.floor+Math.floor(Te*2);H<=it;H++){let Ge=ye(B,H,yt);k[Ge]!==r.water&&(k[Ge]=0)}}}}function M(k,O,V,K,J,nt,$,Q){let st=O*16,mt=V*16;for(let xt=0;xt<16;xt++)for(let bt=0;bt<16;bt++){let wt=st+bt,yt=mt+xt,B=K[(xt+1)*J+bt+1],it=nt[xt*16+bt];if(B+1>=64||Math.hypot(wt-$.x,yt-$.z)<48)continue;let pt=k[ye(bt,B,xt)],Lt=ye(bt,B+1,xt);if(k[Lt])continue;let dt=fr(n+11,wt,yt),Vt=fr(n+13,wt,yt);pt===r.grass?dt<.012&&o.length?k[Lt]=o[Math.floor(Vt*o.length)]:dt<(it==="plains"?.1:.05)&&r.tallgrass?k[Lt]=r.tallgrass:it==="forest"&&dt<.08&&r.fern?k[Lt]=r.fern:it==="forest"&&dt<.084&&r.mushR&&(k[Lt]=Vt<.5?r.mushR:r.mushB):pt===r.sand&&it==="desert"&&B>Ln+1&&dt<.008&&r.deadbush&&(k[Lt]=r.deadbush)}for(let xt=2;xt<14;xt++)for(let bt=2;bt<14;bt++){let wt=st+bt,yt=mt+xt,B=K[(xt+1)*J+bt+1],it=nt[xt*16+bt],pt=k[ye(bt,B,xt)];if(Math.abs(wt-$.x)<7&&Math.abs(yt-$.z)<7||Q.some(Qt=>Math.abs(wt-Qt.x)<ai+2&&Math.abs(yt-Qt.z)<ai+2))continue;let Lt=fr(n+7,wt,yt),dt=fr(n+9,wt,yt);if(it==="desert"&&pt===r.sand&&B>Ln+1&&Lt<.008&&r.cactus){let Qt=1+Math.floor(dt*3);for(let Jt=B+1;Jt<=B+Qt&&Jt<64;Jt++)k[ye(bt,Jt,xt)]=r.cactus;continue}if(it==="snow"&&pt===r.snow&&Lt<.02){I(k,bt,xt,B,5+Math.floor(dt*3));continue}let Vt=it==="forest"?.035:it==="plains"?.003:0;pt===r.grass&&Lt<Vt&&E(k,bt,xt,B,wt,yt,4+Math.floor(dt*2))}}function E(k,O,V,K,J,nt,$){let Q=K+$;if(!(Q+2>=64)){for(let st=Q-2;st<=Q+1;st++){let mt=st>=Q?1:2;for(let xt=-mt;xt<=mt;xt++)for(let bt=-mt;bt<=mt;bt++){if(mt===2&&Math.abs(bt)===2&&Math.abs(xt)===2&&Bn(n,J+bt,st,nt+xt)<.6)continue;let wt=ye(O+bt,st,V+xt);k[wt]===r.air&&(k[wt]=r.leaves)}}k[ye(O,K,V)]=r.dirt;for(let st=K+1;st<=Q;st++)k[ye(O,st,V)]=r.log}}function I(k,O,V,K,J){let nt=K+J;if(!(nt+2>=64)){for(let $=K+2;$<=nt+1;$++){let Q=nt+1-$,st=Q>=4?2:Q>=1?1:0;for(let mt=-st;mt<=st;mt++)for(let xt=-st;xt<=st;xt++){if(st===2&&Math.abs(xt)+Math.abs(mt)>3)continue;let bt=ye(O+xt,$,V+mt);k[bt]===r.air&&(k[bt]=r.sleaves)}}k[ye(O,K,V)]=r.dirt;for(let $=K+1;$<=nt;$++)k[ye(O,$,V)]=r.slog}}let z={height:x,baseHeight:_,biomeOf:T,climate:m,genChunk:C,findSpawn:b,SEA:Ln},q=Np(n,z,e);return z.villages=q,z}function pu(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,p=t,d=t+s,h=e-a,g=e+a,_=Math.floor(l),y=Math.floor(c-1e-6),x=Math.floor(p),m=Math.floor(d-1e-6),T=Math.floor(h),L=Math.floor(g-1e-6),b=!1;for(let A=x;A<=m;A++)for(let C=T;C<=L;C++)for(let N=_;N<=y;N++){let M=r(N,A,C);if(!M)continue;let E=M===!0?dM:M;for(let I of E){let z=N+I[0],q=A+I[1],k=C+I[2],O=N+I[3],V=A+I[4],K=C+I[5];if(!(O<=l+1e-6||z>=c-1e-6||V<=p+1e-6||q>=d-1e-6||K<=h+1e-6||k>=g-1e-6)){if(!o)return!0;b=!0,o.push([z,q,k,O,V,K])}}}return b}var dM=[[0,0,0,1,1,1]],bo=(n,t,e,i,s,r)=>pu(n,t,e,i,s,r,null),zp=(n,t,e=.6,i=1.8)=>!bo(n.x,n.y,n.z,e,i,t);function nc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,p=0,d=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,h=Math.max(1,Math.ceil(d/.3)),g=e/h,_=[];for(let y=0;y<h;y++){let x=t.y*g;x&&(_.length=0,pu(n.x,n.y+x,n.z,r,o,i,_)?(x<0?(n.y=Math.max(..._.map(m=>m[4])),c=!0):n.y=Math.min(..._.map(m=>m[1]))-o,t.y=0):n.y+=x);for(let m of["x","z"]){let T=t[m]*g;if(!T)continue;let L={x:n.x,y:n.y,z:n.z};if(L[m]+=T,_.length=0,!pu(L.x,L.y,L.z,r,o,i,_)){n[m]=L[m];continue}if(a&&(c||s.grounded)){let A=Math.max(..._.map(C=>C[4]));if(A-n.y>0&&A-n.y<=1.01&&!bo(L.x,A,L.z,r,o,i)&&!bo(n.x,A,n.z,r,o,i)){p+=A-n.y,n.y=A,n[m]=L[m];continue}}let b=m==="x"?0:2;n[m]=T>0?Math.min(..._.map(A=>A[b]))-l-1e-4:Math.max(..._.map(A=>A[b+3]))+l+1e-4,bo(n.x,n.y,n.z,r,o,i)&&(n[m]=L[m]-T),t[m]=0}}return!c&&t.y<=0&&bo(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:p}}function pM(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let p=[e+c[0],i+c[1],s+c[2]],d=[e+c[3],i+c[4],s+c[5]],h=0,g=1/0,_=-1,y=!0;for(let x=0;x<3&&y;x++){if(Math.abs(a[x])<1e-12){(o[x]<p[x]||o[x]>d[x])&&(y=!1);continue}let m=(p[x]-o[x])/a[x],T=(d[x]-o[x])/a[x];m>T&&([m,T]=[T,m]),m>h&&(h=m,_=x),T<g&&(g=T),h>g&&(y=!1)}if(y&&(!l||h<l.t)){let x=[0,0,0];_>=0&&(x[_]=-Math.sign(a[_])),l={t:h,face:_>=0?x:null}}}return l}function mr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),p=Math.sign(t.y),d=Math.sign(t.z),h=c?Math.abs(1/t.x):1/0,g=p?Math.abs(1/t.y):1/0,_=d?Math.abs(1/t.z):1/0,y=c?(c>0?o+1-n.x:n.x-o)*h:1/0,x=p?(p>0?a+1-n.y:n.y-a)*g:1/0,m=d?(d>0?l+1-n.z:n.z-l)*_:1/0,T=[0,0,0],L=0;for(;L<=e;){let b=i(o,a,l);if(b&&s(b)){let A=r&&r(b);if(!A)return{x:o,y:a,z:l,n:b,face:T,dist:L};let C=pM(n,t,o,a,l,A);if(C&&C.t<=e)return{x:o,y:a,z:l,n:b,face:C.face||T,dist:C.t}}y<x&&y<m?(o+=c,L=y,y+=h,T=[-c,0,0]):x<m?(a+=p,L=x,x+=g,T=[0,-p,0]):(l+=d,L=m,m+=_,T=[0,0,-d])}return null}var vu={};Ii(vu,{ACC:()=>Gp,BOOST:()=>mu,BRAKE:()=>Wp,CONN:()=>li,DECAY:()=>Xp,DIR:()=>wo,FRIC:()=>Hp,MAX:()=>So,OPP:()=>xr,SLOPE_G:()=>gu,UP:()=>Ei,blockId:()=>Ao,connect:()=>sc,isStraight:()=>xu,linked:()=>qp,mount:()=>_u,next:()=>Eo,pos:()=>rc,shapeOf:()=>gr,step:()=>yu});var li={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Ei={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},wo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},xr={n:"s",s:"n",e:"w",w:"e"},mM=["ns","ew","ne","nw","se","sw"],kp={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},Gp=3,So=6,mu=11,Hp=.8,Wp=6,Xp=1.5,gu=2.5,xu=n=>n==="ns"||n==="ew"||!!Ei[n],Ao=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),ic=(n,t)=>li[n].find(e=>e!==t);function gr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":mM.find(e=>li[e].includes(n)&&li[e].includes(t))||null}function Eo(n,t,e,i,s,r){let[o,a]=wo[s];for(let l of Ei[r]===s?[1]:[0,-1]){let c=n(t+o,e+l,i+a);if(c&&li[c.shape].includes(xr[s])&&Ei[c.shape]===xr[s]==(l===-1))return{x:t+o,y:e+l,z:i+a,r:c}}return null}function qp(n,t,e,i){let s=n(t,e,i);return s?li[s.shape].filter(r=>Eo(n,t,e,i,r,s.shape)):[]}function Vp(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===xr[e]?"asc_"+e:null}return n.length===2?gr(n[0].d,n[1].d):gr(n[0].d)}function sc(n,t,e,i,s,r="n"){let o=[];for(let c of["n","e","s","w"]){let[p,d]=wo[c],h=xr[c];for(let g of[0,1,-1]){let _=t+p,y=e+g,x=i+d,m=n(_,y,x);if(!m)continue;if(li[m.shape].includes(h)&&Ei[m.shape]===h==(g===-1)){o.push({d:c,dy:g,pri:0});break}let T=qp(n,_,y,x);if(T.length>=2)continue;let L=null;if(g===-1?L=!T.length||T[0]===c?"asc_"+h:null:Ei[m.shape]&&T.includes(Ei[m.shape])||(L=T.length?gr(T[0],h):gr(h)),L&&(!m.powered||xu(L))){o.push({d:c,dy:g,pri:1,ns:L,at:[_,y,x]});break}}}o.sort((c,p)=>c.pri-p.pri);let a=[];for(let c of o){if(a.length===2)break;let p=Vp(a.concat([c]));!p||s&&!xu(p)||a.push(c)}return{shape:a.length?Vp(a):gr(r),updates:a.filter(c=>c.pri===1).map(c=>[c.at[0],c.at[1],c.at[2],c.ns])}}function _u(n,t,e,i,s,r,o=()=>!1){let a=li[n],l=p=>wo[p][0]*s+wo[p][1]*r+(o(p)?.01:0),c=l(a[0])>=l(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:c===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function yu(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,li[s.shape].includes(n.from)||(n.from=li[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=ic(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,mu)),e>.1?n.v<So&&(n.v=Math.min(So,n.v+Gp*t)):e<-.1?n.v=Math.max(0,n.v-Wp*t):n.v=Math.max(0,n.v-Hp*t),n.v>So&&!s.powered&&(n.v=Math.max(So,n.v-Xp*t)),Ei[s.shape]&&(n.v+=(ic(s.shape,n.from)===Ei[s.shape]?-gu:gu)*t,n.v<0&&(n.from=ic(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=ic(s.shape,n.from),o=Eo(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=xr[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,mu));else{n.s=1,n.v=0;break}}return n}function rc(n){let t=li[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=kp[e],r=kp[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[l,c,p]=a<.5?[s,o,a*2]:[o,r,a*2-1],d=l[0]+(c[0]-l[0])*p,h=l[1]+(c[1]-l[1])*p,g=Ei[n.shape],_=g?g==="n"?1-h:g==="s"?h:g==="e"?d:1-d:0,y=g?i===g?1:-1:0;return{x:n.x+d,y:n.y+_,z:n.z+h,yaw:Math.atan2(-(c[0]-l[0]),-(c[1]-l[1])),pitch:Math.atan2(y,1)*(g?1:0)}}var Au={};Ii(Au,{WINDOW:()=>gM,create:()=>Mu,reel:()=>Su,roll:()=>wu,tick:()=>bu});var gM=1.3,Yp=n=>3+n()*6;function Mu(n=Math.random){return{phase:"wait",t:0,biteAt:Yp(n),rnd:n}}function bu(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=Yp(n.rnd),"escape"):null}var Su=n=>n&&n.phase==="bite"?"catch":"early";function wu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function $p(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function Zp(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function Jp(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var Kp=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function jp(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Qp(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[ye(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var tm=n=>btoa(String.fromCharCode.apply(null,n)),em=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var _M=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],oc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=_M(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,em(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=Qp(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[l,c]=Pp(r);for(let[p,d]of[...this.portals])Math.floor(d.x/16)===l&&Math.floor(d.z/16)===c&&this.portals.delete(p);for(let p=0;p<256;p++){let d=this.reg.get(a[p]);if(d&&(d.interact==="portal"||d.interact==="shadow_portal")){let h=l*16+p%16,g=c*16+Math.floor(p/16);this.portals.set(h+","+g,{x:h,z:g,name:d.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],l=o*4,c=.95+(o*2654435761>>>28)/16*.1;r.data[l]=a[0]*c,r.data[l+1]=a[1]*c,r.data[l+2]=a[2]*c,r.data[l+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,l=i-o/2/s,c=e+r/2/s,p=i+o/2/s;for(let d=Math.floor(l/16);d<=Math.floor(p/16);d++)for(let h=Math.floor(a/16);h<=Math.floor(c/16);h++){let g=this.tile(wi(h,d));g&&t.drawImage(g,Math.round((h*16-a)*s),Math.round((d*16-l)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:l}}explored(t,e){return this.tops.has(wi(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=tm(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Eu(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Ru={};Ii(Ru,{ARENA_R:()=>To,H0:()=>ci,LAIR:()=>ki,findFrame:()=>Cu,makeShadowTerrain:()=>Tu});var ci=22,ki={x:0,z:40},To=14;function Tu(n,t){let e=d=>t.num(d),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ai(n+11),r=Ai(n+23),o=(d,h)=>d<h?1:d<h+8?1-(d-h)/8:0;function a(d,h){let g=ci+zi(s,d/64,h/64,3)*10,_=Math.max(o(Math.hypot(d-.5,h-.5),9),o(Math.hypot(d-ki.x,h-ki.z),To+2));return g=g*(1-_)+ci*_,Math.max(6,Math.min(54,Math.round(g)))}let l=new Set;for(let d=0;d<8;d++)l.add(Math.round(ki.x+Math.cos(d*Math.PI/4)*To)+","+Math.round(ki.z+Math.sin(d*Math.PI/4)*To));function c(d,h){let g=new Uint8Array(16384),_=d*16,y=h*16;for(let x=0;x<16;x++)for(let m=0;m<16;m++){let T=_+m,L=y+x,b=a(T,L),A=Math.hypot(T-.5,L-.5),C=Math.hypot(T-ki.x,L-ki.z);for(let N=0;N<=b;N++){let M=N===0?i.bedrock:N===b?i.moss:i.stone;if(M===i.stone){let E=Bn(n,T,N,L);N<16&&E<.014?M=i.ore:E>.995&&(M=i.vein)}g[ye(m,N,x)]=M}if(A>6&&Math.abs(r(T/30,L/30))<.035&&(g[ye(m,b,x)]=i.vein),C<To-1&&(g[ye(m,b,x)]=(Math.floor(T)+Math.floor(L))%2?i.bricks:i.stone),l.has(T+","+L)){for(let N=b+1;N<=b+4;N++)g[ye(m,N,x)]=i.bricks;g[ye(m,b+5,x)]=i.vein}if(L===0&&T>=-1&&T<=2)for(let N=ci+1;N<=ci+5;N++){let M=T>=0&&T<=1&&N>=ci+2&&N<=ci+4;g[ye(m,N,x)]=M?i.portal:i.frame}}return g}let p={x:1,y:ci+1,z:2.5,stele:{x:1,y:ci+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:c,findSpawn:()=>p,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function Cu(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let l=-4;l<=1;l++){let c=t+o[0]*a,p=i+o[1]*a,d=e+l,h=(y,x)=>[c+o[0]*y,d+x,p+o[1]*y],g=[];for(let y=0;y<2;y++)for(let x=0;x<3;x++)g.push(h(y,x));if(!g.every(y=>r(n(y[0],y[1],y[2]))))continue;let _=[];for(let y=0;y<3;y++)_.push(h(-1,y),h(2,y));for(let y=0;y<2;y++)_.push(h(y,-1),h(y,3));if(_.every(y=>n(y[0],y[1],y[2])===s)&&_.some(y=>y[0]===t&&y[1]===e&&y[2]===i))return g}return null}var Ro=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Co=100,nm={choice:25,typed:40},yM=5,Iu=100;function im(){return{phase:0,hp:Co,retry:[],done:!1}}function sm(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Co,n.hp+yM),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?nm.typed:nm.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Ro.length-1?(n.phase++,n.hp=Co,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var Pu=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function MM(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Hn(n);return e.colorSpace=nn,e}function rm(){let n=new dn,t=[],e=(a,l)=>{let c=new yn({color:a});return c.userData.base=new le(a),c.userData.role=l,t.push(c),c},i=(a,l,c,p,d,h,g,_,y=n)=>{let x=new Oe(new Qe(a,l,c),e(p,d));return x.position.set(h,g,_),y.add(x),x},s=Pu[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Oe(new Qe(1.15,.72,.02),new yn({map:MM(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let l=new dn;return l.position.set(a*1,1.9,.2),n.add(l),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,l).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,l),l});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function om(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function am(n,t){let e=Pu[Math.min(Pu.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}var Fu={};Ii(Fu,{HOTBAR:()=>Lu,SIZE:()=>ac,add:()=>bn,canAdd:()=>Lo,count:()=>hi,craft:()=>Nu,craftable:()=>cc,createInventory:()=>Io,deserialize:()=>lc,moveBetween:()=>Uu,moveSlot:()=>Du,remove:()=>Po,serialize:()=>Do,takeFromSlot:()=>qn});var ac=36,Lu=9;function Io(n=36){return{slots:new Array(n).fill(null)}}function bn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function hi(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Po(n,t,e){if(hi(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function qn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Du(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Lo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return bn(s,t,e,i)===0}var Do=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function lc(n,t=36){let e=Io(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function cc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(hi(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Nu(n,t,e=()=>64,i){let s=cc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Po(n,o,t.in[o]);return bn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Uu(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function bM(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var _r=(n,t)=>n.owned.includes(t),lm=(n,t)=>n?t?2:1:0;function Ti(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function No(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function cm(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function hm(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&_r(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(No(n,e.price),n.owned.push(e.id),{ok:!0}):Lo(t,e.id,e.qty,i)?(No(n,e.price),bn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var um=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function fm(n){let t=bM(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function wM(){return new Map}function dm(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Ou(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function AM(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function pm(n){let t=wM();for(let e in n||{})t.set(e,AM(n[e]));return t}var hc=16;var cA=18;var Gi=32;function mm(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var je=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function EM(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function te(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Vi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}te(n,o)}var TM=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function CM(n,t){let e=je(t.color),i=mm(EM(t.block+t.face)),s=Gi;if(TM.has(t.pattern)){RM(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=Mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?je(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=Mt(e,1.12);for(let d=0;d<4;d++)Vi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=Mt(e,.96);for(let d=0;d<4;d++)Vi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let d=je(t.top);n.fillStyle=Mt(d);let h=[[0,0],[s,0]];for(let g=s;g>=0;g-=4)h.push([g,8+Math.round(i()*5)]);te(n,h)}if(o==="stone"||o==="bedrock")for(let d=0;d<5;d++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Vi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let d=0;d<4;d++)n.fillStyle=Mt(e,.92),Vi(n,i,i()*s,i()*s,5);n.fillStyle=Mt(a);for(let d=0;d<5;d++)Vi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let d=0;d<26;d++)n.fillStyle=Mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let d=3;d<s;d+=7)n.fillStyle=Mt(e,.82),n.fillRect(d,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=Mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let d=0;d<9;d++)n.fillStyle=Mt(e,i()<.5?.78:1.15),Vi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)n.fillStyle=Mt(e,.78),n.fillRect(0,d,s,1);n.fillStyle=Mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=Mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=Mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=Mt([185,182,174]),te(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=Mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",te(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=Mt(e,1.18,.72);for(let d=6;d<s;d+=10)n.fillRect(4+Math.floor(i()*10),d,10,2)}if(o==="gold"&&(n.fillStyle=Mt(e,1.15),te(n,[[0,0],[s,0],[0,s]]),n.fillStyle=Mt(e,.9),te(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=Mt(je("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=Mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=Mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=Mt(je("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=Mt(je("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=Mt(a),n.fillRect(14,0,4,4)):(n.fillStyle=Mt(je(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,10),n.fillStyle=Mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=Mt(je("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=Mt(a),n.fillRect(0,0,9,14))),o==="wool")for(let d=0;d<7;d++)n.fillStyle=Mt(e,i()<.5?.94:1.04),Vi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=Mt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(a,1.3),te(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=Mt(je("#EFEBDD"),1,.8),te(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=Mt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let d=8;d<s;d+=9)n.fillStyle=Mt(e,.9),n.fillRect(0,d,s,2);if(o==="cactus")if(t.face==="side"){for(let d=4;d<s;d+=8)n.fillStyle=Mt(e,.82),n.fillRect(d,0,2,s);n.fillStyle=Mt(je("#EFEBDD"),1,.7);for(let d=0;d<6;d++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",te(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",te(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=Mt(e,1.1),te(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=Mt(e,.92),te(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=Mt(e,.78);for(let d=0;d<s;d+=8){n.fillRect(0,d+7,s,1);let h=d/8%2?0:8;for(let g=h;g<s;g+=16)n.fillRect(g,d,1,8)}}if(o==="mossy"){n.fillStyle=Mt(a);for(let d=0;d<6;d++)Vi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=Mt(e,.6),te(n,[[4,2],[12,14],[10,15],[3,4]]),te(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=Mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=Mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=Mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=Mt(e,1.08),te(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=Mt(je("#D9CBB5"));for(let d=0;d<s;d+=8){n.fillRect(0,d+6,s,2);let h=d/8%2?0:8;for(let g=h;g<s;g+=16)n.fillRect(g,d,2,6)}}if(o==="checker"&&(n.fillStyle=Mt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let d=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let h of[3,18]){let g=3;for(;g<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=d[Math.floor(i()*d.length)],n.fillRect(g,h+Math.floor(i()*3),_,11),g+=_+1}}n.fillStyle=Mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let d=7;d<s;d+=8)n.fillStyle=Mt(e,.8),n.fillRect(0,d,s,1);if(o==="hay")if(t.face==="side"){for(let d=3;d<s;d+=5)n.fillStyle=Mt(e,.88),n.fillRect(d,0,1,s);n.fillStyle=Mt(je("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=Mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let d=5;d<s;d+=6)n.fillStyle=Mt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=Mt(je("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=Mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=Mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=Mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),te(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let d=7;d<s;d+=8)n.fillStyle=Mt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=Mt(je("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=Mt(je("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=Mt(e),n.fillRect(0,0,s,s),n.fillStyle=Mt(je("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let d=7;d<s;d+=8)n.fillStyle=Mt(e,.85),n.fillRect(0,d,s,1);t.face==="side"&&(n.fillStyle=Mt(a),n.fillRect(0,11,s,3),n.fillStyle=Mt(je("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let d=3;d<s;d+=6)n.fillStyle=Mt(e,.72),n.fillRect(0,d,s,2);if(o==="furnace"){for(let d=0;d<4;d++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Vi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(8,15,s-16,11),n.fillStyle=Mt(je("#E0352B"),1,.85),te(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=Mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=Mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=Mt(a),te(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let d=0;d<c.length;d+=4){let h=1+(i()-.5)*.09;c[d]=Math.min(255,c[d]*h),c[d+1]=Math.min(255,c[d+1]*h),c[d+2]=Math.min(255,c[d+2]*h)}n.putImageData(l,0,0);let p=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=p,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function gm(n){let t=document.createElement("canvas");t.width=t.height=Gi*hc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Gi;let a=o.getContext("2d",{willReadFrequently:!0});CM(a,s),e.drawImage(o,r%hc*Gi,Math.floor(r/hc)*Gi),i[r]=o}),{canvas:t,tileCanvas:i}}function xm(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",te(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",te(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Gi,l=(c,p,d,h,g,_,y,x)=>{r.setTransform(p*a,d*a,h*a,g*a,_,y),r.drawImage(o[c],0,0),x&&(r.fillStyle=`rgba(20,24,20,${x})`,r.fillRect(0,0,Gi,Gi))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,l="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,te(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",te(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,te(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",te(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,te(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",te(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,te(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,p]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,p,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)te(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),te(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,te(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,te(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,te(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,te(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),te(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",te(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),te(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",te(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,te(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",te(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=l,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,te(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",te(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=a,te(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=a,te(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",te(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:l,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&te(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&te(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),te(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",te(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",te(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function _m(){let n=mm(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Gi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,l=6+n()*20,c=n()*Math.PI;te(r,[[a,l],[a+Math.cos(c)*9,l+Math.sin(c)*9],[a+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function RM(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?je(t.accent):e,a=(l,c,p)=>{n.fillStyle=p,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,Mt(e)),n.fillStyle=Mt(e,1.1),te(n,[[16,26],[9,20],[15,22]]),te(n,[[17,24],[24,18],[18,21]]),n.fillStyle=Mt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;te(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=Mt(je("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),p=14+Math.floor(i()*14);n.fillStyle=Mt(e,i()<.5?.9:1.1),te(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-p]])}else if(r==="deadbush")n.strokeStyle=Mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=Mt(e),n.fillRect(14,18,4,14),n.fillStyle=Mt(o),te(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=Mt(je("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=Mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=Mt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let p=0;p<5;p++){let d=5+p*5;n.fillStyle=Mt(e),n.fillRect(d,s-c,2,c),l===3&&(n.fillStyle=Mt(o),te(n,[[d-2,s-c+9],[d+1,s-c-1],[d+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let p=Mt(je("#8C6640")),d=Mt(e),h=s*.33,g=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=p;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=d,n.fillRect(h-1.5,0,3,s),n.fillRect(g-1.5,0,3,s),t.accent&&(n.fillStyle=Mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=p,n.lineWidth=3;for(let _=0;_<5;_++){let y=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(y)*(s-g-4),Math.sin(y)*(s-g-4)),n.lineTo(s+Math.cos(y)*(s-h+4),Math.sin(y)*(s-h+4)),n.stroke()}n.strokeStyle=d;for(let _ of[s-h,s-g])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=Mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var ym=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,vm=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function IM(n,t){let e=Bi(n),i=Bi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,p=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,p)<=14&&s.push([e+o,i+r])}return s}function bm(n){let t=new Hn(n);t.magFilter=sn,t.minFilter=sn,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new Z(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new vn({uniforms:e,vertexShader:ym,fragmentShader:vm}),s=new vn({uniforms:e,vertexShader:ym,fragmentShader:vm,transparent:!0,depthWrite:!1,side:Wn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Mm(n){let t=new on;return t.setAttribute("position",new Je(n.pos,3)),t.setAttribute("uv",new Je(n.uv,2)),t.setAttribute("light",new Je(n.light,1)),t.setAttribute("lt",new Je(n.lt,2,!0)),t.setIndex(new Je(n.index,1)),t.computeBoundingSphere(),t}var uc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=wi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Oe(Mm(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Oe(Mm(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Bi(t),s=Bi(e),r=Lp(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=wi(l.cx,l.cz);if(this.chunks.has(c))continue;let p={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,p),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:p.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let p=c.cx-i,d=c.cz-s;if(p*p+d*d>o*o){for(let h of["o","t"])c[h]&&(this.scene.remove(c[h]),c[h].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,p]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(p-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(wi(Bi(t),Bi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=cu(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(wi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=cu(t,e,i);if(!r)return!1;let o=wi(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,dm(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[p,d]of IM(l,c))this.dirtyMesh.add(wi(p,d));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Bu="hw_world",Uo=null;function Sm(n){n!==Bu&&(Bu=n,Uo=null)}function wm(){return Uo||(Uo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Bu,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Uo)}function zu(n,t){return wm().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var ku=n=>zu("readonly",t=>t.get(n)),Vu=n=>zu("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Am(n){let t=await wm();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Em(n){let t={};for(let e of n){let i=await ku(e);i!==void 0&&(t[e]=i)}await zu("readwrite",e=>e.clear()),await Vu(t)}function U(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Hi=n=>document.querySelector(n);var LM="../../",DM=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],Gu=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],fc=null;function NM(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Hu(){return fc||(fc=(async()=>{for(let t of DM)await NM(LM+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw fc=null,n})),fc}async function Cm(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=U("div",{class:"panel quiz"});n.append(r),r.append(U("div",{class:"p-head"},U("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await Hu()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,l=[],c=0,p=0,d=0;function h(){n.hidden=!0,n.innerHTML="",i&&i()}function g(){l=o.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Gu,lv:1,count:s}),l.length||(l=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),c=0,p=0,d=0,_()}function _(){r.innerHTML="";let m=l[c],T=a.isTyped(m);n._q=m;let L=U("div",{class:"fb"}),b=U("div",{class:"q-body"});r.append(U("div",{class:"p-head"},U("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",U("small",{},`\u7B2C ${c+1} / ${l.length} \u984C`)),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("div",{class:"q-type"},(a.TYPES[m.type]||"\u984C\u76EE")+(T?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),U("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?U("div",{class:"q-sub"},m.sub):null,b,L);let A=!1,C=N=>{if(A)return;A=!0;let M=lm(N,T);e&&e(N),N&&(d++,p+=M,t&&t(M)),L.className="fb "+(N?"ok":"bad"),L.append(U("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${M} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",N?null:U("b",{class:"en"},m.answer)),!N&&m.why?U("div",{class:"why"},m.why):null,U("button",{class:"btn",onclick:y},c+1<l.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let N=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),M=()=>{A||!N.value.trim()||C(o.check(m,N.value).ok)};N.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&M()}),b.append(U("div",{class:"typerow"},N,U("button",{class:"btn",onclick:M},"\u9001\u51FA"))),setTimeout(()=>N.focus(),50)}else{let N=U("div",{class:"opts"});(m.options||[]).forEach(M=>N.append(U("button",{class:"opt"+(/[a-z]/i.test(M)?" en":""),onclick:E=>{if(A)return;let I=o.check(m,M).ok;E.currentTarget.classList.add(I?"ok":"bad"),C(I)}},M))),b.append(N)}}function y(){c++,c<l.length?_():x()}function x(){r.innerHTML="",r.append(U("div",{class:"p-head"},U("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("p",{class:"big"},`\u7B54\u5C0D ${d} / ${l.length} \u984C\uFF0C\u62FF\u5230 ${p} \u91D1\u5E63`),U("div",{class:"row"},U("button",{class:"btn",onclick:g},"\u518D\u4F86\u4E00\u56DE"),U("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}g()}var Tm=new Set(Gu);async function Wu(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o}){n.innerHTML="",n.hidden=!1;let a=U("div",{class:"panel quiz"});n.append(a),a.append(U("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let l;try{l=await Hu()}catch{a.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let c=window.KE,p=null,d=i?new Set(i.filter(T=>Tm.has(T))):Tm;for(let T of t){let L=l.byId[T];if(L&&d.has(L.type)){p=l.get(T);break}}let h=!!p;p||(p=l.buildQuiz({modules:s||["words","phrases","grammar","patterns"],types:i?[...d]:Gu,lv:1,count:1})[0]||l.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let g=c.isTyped(p);n._q=p,a.innerHTML="";let _=U("div",{class:"fb"}),y=U("div",{class:"q-body"});a.append(U("div",{class:"p-head"},U("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),U("div",{class:"q-type"},(h?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":c.TYPES[p.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),U("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?U("div",{class:"q-sub"},p.sub):null,y,_);let x=!1,m=T=>{x||(x=!0,_.className="fb "+(T?"ok":"bad"),_.append(U("div",{},T?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",T?null:U("b",{class:"en"},p.answer)),!T&&p.why?U("div",{class:"why"},p.why):null,U("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(T,g,p)}},"\u7E7C\u7E8C")))};if(p.input==="type"){let T=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{x||!T.value.trim()||m(l.check(p,T.value).ok)};T.addEventListener("keydown",b=>{b.stopPropagation(),b.key==="Enter"&&L()}),y.append(U("div",{class:"typerow"},T,U("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>T.focus(),50)}else{let T=U("div",{class:"opts"});(p.options||[]).forEach(L=>T.append(U("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:b=>{if(x)return;let A=l.check(p,L).ok;b.currentTarget.classList.add(A?"ok":"bad"),m(A)}},L))),y.append(T)}}async function Rm(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=U("div",{class:"panel quiz"});n.append(i),i.append(U("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Hu()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,l=0,c=()=>{i.innerHTML="";let p=o[a];n._q=p;let d=U("div",{class:"fb"}),h=U("div",{class:"q-body"});i.append(U("div",{class:"p-head"},U("h2",{},t.title_zh+" ",U("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),U("div",{class:"q-type"},r.TYPES[p.type]||"\u984C\u76EE"),U("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?U("div",{class:"q-sub"},p.sub):null,h,d);let g=!1,_=y=>{g||(g=!0,y&&l++,d.className="fb "+(y?"ok":"bad"),d.append(U("div",{},y?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",y?null:U("b",{class:"en"},p.answer)),!y&&p.why?U("div",{class:"why"},p.why):null,U("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(p.input==="type"){let y=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),x=()=>{g||!y.value.trim()||_(s.check(p,y.value).ok)};y.addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&x()}),h.append(U("div",{class:"typerow"},y,U("button",{class:"btn",onclick:x},"\u9001\u51FA"))),setTimeout(()=>y.focus(),50)}else{let y=U("div",{class:"opts"});(p.options||[]).forEach(x=>y.append(U("button",{class:"opt"+(/[a-z]/i.test(x)?" en":""),onclick:m=>{if(g)return;let T=s.check(p,x).ok;m.currentTarget.classList.add(T?"ok":"bad"),_(T)}},x))),h.append(y)}};c()}function Im(n,t,e){let[i,s]=String(n).split(",").map(Number),r=p=>Bn(4242,i|0,t*7+p,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,l=Math.floor(r(2)*a.length),c=(l+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[l],a[c]]}}function Pm(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?_r(n,e.blueprint)?{ok:!1,reason:"owned"}:(No(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Lo(t,e.give,e.count,i)?(No(n,e.price),bn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Xu=(n,t,e)=>!!(n&&n[t.id]===e);function Lm(n,t,e,i,s,r,o=()=>64){if(Xu(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Ti(s,t.reward.coins|0);let a={};for(let l in t.reward.items||{}){let c=bn(r,l,t.reward.items[l],o);c&&(a[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Dm(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var qu={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},dc=n=>n==="creative"?"creative":"survival",Nm=n=>qu[dc(n)].db;function Um(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Fm(n){let t=dc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Om(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Bm=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var nf={};Ii(nf,{BREED_CAP:()=>tf,LOVE_MS:()=>km,MAX_STAGE:()=>BM,STAGE_SECONDS:()=>OM,armorMax:()=>zm,armorPoints:()=>Fo,canTill:()=>$u,eat:()=>Qu,equip:()=>zM,findMate:()=>ef,harvest:()=>Zu,nearWater:()=>Ju,reduceDamage:()=>ju,stageAt:()=>Yu,wearArmor:()=>Ku});var OM=60,BM=3;function Yu(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var $u=(n,t)=>(n==="grass"||n==="dirt")&&t;function Zu(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function Ju(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let l of[0,-1])if(t(n(e+a,i+l,s+o)))return!0;return!1}function Fo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var zm=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function Ku(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?zm(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var ju=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function zM(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Qu(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var km=3e4,tf=12;function ef(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<km&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var af={};Ii(af,{apply:()=>gc,duck:()=>us,muted:()=>Oo,rainLevel:()=>of,scene:()=>rf,setVolume:()=>xc,sfx:()=>mn,state:()=>kM,toggleMute:()=>sf,unlock:()=>mc});var We=null,Ts=null,pc=null,yr=null,zn=()=>window.HIAudio||null,Gm=()=>zn()?zn().get():{muted:!1,music:.35,sfx:.7};function mc(){try{zn()&&zn().unlock()}catch{}if(!We){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;We=new n,Ts=We.createGain(),Ts.connect(We.destination),pc=We.createBuffer(1,We.sampleRate,We.sampleRate);let t=pc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}We.state==="suspended"&&We.resume(),gc()}function gc(){if(Ts){let n=Gm();Ts.gain.setTargetAtTime(n.muted?0:n.sfx,We.currentTime,.03)}}var Oo=()=>Gm().muted;function sf(){return zn()&&zn().toggle(),gc(),Oo()}function xc(n){zn()&&zn().set(n),gc()}function rf(n){try{zn()&&zn().scene(n)}catch{}}function us(n){let t=zn();t&&(n&&us.id==null?us.id=t.duckStart():!n&&us.id!=null&&(t.duckEnd(us.id),us.id=null))}function Hm(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Yn(n,t,e,i,s,r,o){let a=We.createOscillator(),l=We.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),Hm(l,e,i,s,r),a.connect(l),l.connect(Ts),a.start(e),a.stop(e+i+r+.05)}function fs(n,t,e,i,s,r=1){let o=We.createBufferSource(),a=We.createBiquadFilter(),l=We.createGain();o.buffer=pc,a.type=n,a.frequency.value=t,a.Q.value=r,Hm(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Ts),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Vm={wood:(n,t)=>{Yn("sine",190*t,n,.003,.16,.12,95*t),fs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{fs("highpass",1800*t,n,.1,.06),Yn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{fs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Yn("sine",1900*t,n,.002,.08,.25,1500*t),fs("highpass",4200,n,.06,.12)},soft:(n,t)=>{fs("bandpass",850*t,n,.09,.1,.8)}};function mn(n,t="soft"){if(!We||Oo())return;let e=We.currentTime+.005,i=Vm[t]||Vm.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{fs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Yn("sine",880,e,.002,.07,.08,1320);break;case"chest":Yn("triangle",160,e,.02,.07,.3,120),Yn("sine",330,e+.12,.005,.05,.15);break;case"door":Yn("sawtooth",120,e,.03,.04,.3,160),fs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>fs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Yn("triangle",659,e,.005,.08,.15),Yn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Yn("sine",1319,e,.002,.08,.08),Yn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Yn("triangle",300,e,.005,.1,.18,200);break;default:break}}function of(n){if(We){if(!yr&&n>.01){let t=We.createBufferSource(),e=We.createBiquadFilter(),i=We.createBiquadFilter(),s=We.createGain();t.buffer=pc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Ts),t.start(),yr={s:t,g:s}}yr&&yr.g.gain.setTargetAtTime(.06*n,We.currentTime,.4)}}var kM=()=>({ctx:We?We.state:"none",hi:zn()?zn().state():null,rain:yr?+yr.g.gain.value.toFixed(3):0});var df={};Ii(df,{HI_SCENE:()=>cf,createWeather:()=>hf,precipFor:()=>ff,sceneFor:()=>lf,soundOf:()=>vr,stepWeather:()=>uf});function vr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function lf({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var cf={calm:"hub",night:"night",cave:"cave"};function hf(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function uf(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function ff(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var VM=[1,2,4,6,8];function _c(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/VM[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Bo(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function Wm(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var yf={};Ii(yf,{collect:()=>xf,createFurnace:()=>pf,dismantle:()=>_f,start:()=>mf,tick:()=>gf});function pf(){return{fuel:0,jobs:[],done:{}}}function mf(n,t,e,i=4){if(hi(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(hi(t,"coal")<1)return{ok:!1,reason:"fuel"};Po(t,"coal",1),n.fuel+=i}return Po(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function gf(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function xf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=bn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function _f(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Ef={};Ii(Ef,{MAX_HP:()=>zo,REGEN_EVERY:()=>HM,SAFE_FALL:()=>GM,createHealth:()=>vf,damage:()=>bf,fallDamage:()=>Mf,hearts:()=>Af,regen:()=>Sf,respawnPoint:()=>wf});var zo=20,GM=4,HM=4;function vf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Mf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function bf(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Sf(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function wf(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Af(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var yc={animal:8,quiz:4};function Xm(){return{list:[],nextId:1}}var ko=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function qm(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Ym(n,t){return n<.2&&!t}function $m(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function Zm(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,p=Math.hypot(l,c);if(p>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/p*s.speed,n.v.z=c/p*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let l=a>1.6?s.speed:0;n.v.x=r/(a||1)*l,n.v.z=o/(a||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Jm(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var Km=(n,t)=>n?(t?2:1)+1:0;function vc(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,p=1/0;for(let d=0;d<3;d++){if(Math.abs(l[d])<1e-9){if(a[d]<r[d]||a[d]>o[d])return null;continue}let h=(r[d]-a[d])/l[d],g=(o[d]-a[d])/l[d];if(h>g&&([h,g]=[g,h]),c=Math.max(c,h),p=Math.min(p,g),c>p)return null}return c}function jm(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var Qm=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function t0(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function e0(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),l={};Ti(i,o);for(let c in a){let p=bn(e,c,a[c],s);p&&(l[c]=p)}return{ok:!0,coins:o,items:a,leftovers:l,name_zh:r.name_zh}}function n0(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Tf(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function i0(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Tf(n[e].map,n,t).ok?n[e]:null}var Ci={};function Mr(n){return Ci[n]||(Ci[n]=new yn({color:n,transparent:!0}),Ci[n].userData.base=new le(n)),Ci[n]}var Vo=null;function qM(){if(Vo)return Vo;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Vo=new Hn(n),Vo.colorSpace=nn,Vo}function s0(n,t){let e=new dn,i=n.colors,[s,r]=n.size,o=(l,c,p,d,h,g,_,y)=>{let x=new Oe(new Qe(l,c,p),y||Mr(d));return x.position.set(h,g,_),e.add(x),x},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let p=o(.2,.6,.22,i.leg,c,.6,0);p.geometry.translate(0,-.6/2,0),a.push(p)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Ci.__face||(Ci.__face=new yn({map:qM(),transparent:!0}),Ci.__face.userData.base=new le("#ffffff"));let c=[Mr(i.head),Mr(i.head),Mr(i.head),Mr(i.head),Mr(i.head),Ci.__face],p=new Oe(new Qe(s*.9,s*.8,s*.8),c);p.position.set(0,r*.72+s*.4,0),e.add(p),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let p=n.id==="chicken"?.3:.45,d=o(p,p,p,i.head,0,l+c+p*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+p/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-p/2-.05));let h=n.id==="chicken"?.06:.18,g=n.id==="chicken"?0:s*.45,_=s*.3;for(let[y,x]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-g],[_,-g],[-_,g],[_,g]]){let m=o(h,l,h,i.leg,y,l/2,x);m.geometry.translate(0,-l/2,0),m.position.y=l,a.push(m)}}return e.userData.legs=a,e}function r0(n){for(let t in Ci){let e=Ci[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Mc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var bc="b80d9bfc9f",Cf=new URLSearchParams(location.search),ZM=720,Sc=5,a0={boat:-.85,minecart:-.6,horse:.75},l0=[[0,0,0,1,.1,1]],c0=[[0,0,0,1,.5,1]],JM=[[0,0,0,1,1,1]],KM=[[.3,0,.3,.7,.7,.7]],jM=20261008,QM=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,u={touch:QM,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function br(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function Sr(n,t){try{localStorage.setItem(n,t)}catch{}}async function tb(){let n=dc(br("hw_mode","survival")),t=Fm(n),e=!t.creative&&br("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=f=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(f)?f+"_s":f,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";Sm(Nm(n));let[r,o,a,l,c,p,d]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json"].map(f=>fetch(f,{cache:"no-cache"}).then(S=>S.json()))),h=Ip(r),g=o.recipes||[],_=f=>h.maxStack(f),y={};try{let[f,S,R,P,F,X,ot,ht,ct,vt,Gt,se]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles"].map(ie=>ku(i(ie))));y={meta:f,player:S,inv:R,coins:P,furnaces:F,claimed:X,quests:ot,chests:ht,crops:ct,achv:vt,mapd:Gt,vehs:se,chunks:await Am(s)}}catch(f){console.warn("save unavailable",f)}let x=y.meta&&y.meta.seed||jM+qu[n].seedOffset,m=e==="shadow"?x+7777:x,T=e==="shadow"?Tu(m,h):Bp(x,h,c),L=pm(Object.fromEntries(Object.entries(y.chunks||{}).map(([f,S])=>[f.slice(s.length),S]))),b=y.inv?lc(y.inv):Io();t.creative&&!y.inv&&Bm.forEach((f,S)=>{h.get(f)&&(b.slots[S]={id:f,count:64})});let A=fm(y.coins),C=$p(y.achv),N=d.achievements||[],M=new oc(h,y.mapd),E=vf(y.player&&y.player.hp!=null?y.player.hp:20);u.bed=y.player&&y.player.bed||null,u.horse=y.player&&y.player.horse||null;let I=l.portals||[],z=Array.isArray(y.claimed)?y.claimed.slice():[],q=y.furnaces||{},k=y.quests||{},O=Object.fromEntries(Object.entries(y.chests||{}).map(([f,S])=>[f,lc(S,27)])),V=y.crops||{};u.armor=y.player&&Array.isArray(y.player.armor)?y.player.armor.slice(0,4):[null,null,null,null],u.armorDur=y.player&&Array.isArray(y.player.armorDur)?y.player.armorDur.slice(0,4):[null,null,null,null];let K=o.smelt||[],J=o.fuelPerCoal||4;y.meta&&typeof y.meta.time=="number"&&(u.time=y.meta.time);let nt=Hi("#c"),$=new Ql({canvas:nt,antialias:!1,powerPreference:"high-performance"});$.setPixelRatio(Math.min(window.devicePixelRatio||1,u.touch?1.5:1.25));let Q=new Zr,st=new le("#EFEBDD");Q.background=st;let mt=new _n(72,1,.08,200);mt.rotation.order="YXZ";let xt=gm(h),bt=xm(h,xt),wt=bm(xt.canvas),yt=new Worker("assets/hw-worker.js?v="+bc),B=new uc({scene:Q,mats:wt,reg:h,worker:yt,diffs:L,onDirty:f=>{u.dirty.add(f),(u.mapDirty||(u.mapDirty=new Set)).add(f)}}),it=Math.max(2,Math.min(6,parseInt(Cf.get("rd")||br("hw_rd",u.touch?"3":"4"),10)||4));B.setRenderDistance(it),mt.far=it*16+40,mt.updateProjectionMatrix();let pt=await new Promise(f=>{let S=R=>{R.data.type==="ready"&&(yt.removeEventListener("message",S),f(R.data.spawn))};yt.addEventListener("message",S),yt.postMessage({type:"init",seed:m,dim:e,blocks:r,structures:c,diffs:Object.fromEntries([...L].map(([R,P])=>[R,Ou(P)]))})}),Lt=y.player&&y.player.dims&&y.player.dims[e];u.dimPos=y.player&&y.player.dims||{},y.player&&(e==="overworld"||Lt)?Object.assign(u,{p:Lt?{x:Lt.x,y:Lt.y,z:Lt.z}:{x:y.player.x,y:y.player.y,z:y.player.z},yaw:(Lt?Lt.yaw:y.player.yaw)||0,pitch:y.player.pitch||0,fly:!!y.player.fly&&!Lt,sel:y.player.sel|0}):(y.player&&(u.sel=y.player.sel|0),u.p={x:pt.x,y:pt.y,z:pt.z},u.yaw=Math.atan2(-(pt.stele.x+.5-pt.x),-(pt.stele.z+.5-pt.z)),u.pitch=-.15);let dt=new bs(new io(new Qe(1.004,1.004,1.004)),new Ms({color:1382164,transparent:!0,opacity:.45}));dt.visible=!1,Q.add(dt);let Vt=_m().map(f=>new Hn(f)),Qt=new Oe(new Qe(1.01,1.01,1.01),new yn({map:Vt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));Qt.visible=!1,Q.add(Qt);let Jt=(f,S)=>{let R=document.createElement("canvas");R.width=R.height=64;let P=R.getContext("2d");P.fillStyle=f,P.beginPath(),P.arc(32,32,28,0,7),P.fill(),S&&(P.globalCompositeOperation="destination-out",P.beginPath(),P.arc(44,26,24,0,7),P.fill());let F=new Hn(R);return F.colorSpace=nn,F},ee=new vs(new es({map:Jt("#F2C46B"),depthWrite:!1,fog:!1})),ue=new vs(new es({map:Jt("#EDE6D0",!0),depthWrite:!1,fog:!1}));Q.add(ee,ue);let Ht=500,oe=new Float32Array(Ht*6),Be=new Float32Array(Ht*3),Ve=new Float32Array(Ht*3);for(let f=0;f<Ht;f++)Ve[f*3]=Math.random()*24-12,Ve[f*3+1]=Math.random()*16,Ve[f*3+2]=Math.random()*24-12;let Te=new on;Te.setAttribute("position",new Je(oe,3));let Pe=new bs(Te,new Ms({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));Pe.frustumCulled=!1,Pe.visible=!1,Q.add(Pe);let H=new on;H.setAttribute("position",new Je(Be,3));let Ge=new to(H,new ir({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Ge.frustumCulled=!1,Ge.visible=!1,Q.add(Ge),u.weather=hf();let Me=0;function D(f,S,R){if(Pe.visible=R==="rain",Ge.visible=R==="snow",!!R){Me+=f;for(let P=0;P<Ht;P++){let F=Ve[P*3],X=Ve[P*3+2],ot=R==="rain"?16:1.6,ht=S.y+10-(Ve[P*3+1]+Me*ot)%16;if(R==="rain"){let ct=P*6;oe[ct]=oe[ct+3]=S.x+F,oe[ct+2]=oe[ct+5]=S.z+X,oe[ct+1]=ht,oe[ct+4]=ht-.45}else{let ct=P*3,vt=Math.sin(Me*.8+P)*.4;Be[ct]=S.x+F+vt,Be[ct+1]=ht,Be[ct+2]=S.z+X+vt*.6}}(R==="rain"?Te:H).attributes.position.needsUpdate=!0}}let v=new dn,Y=(f,S,R,P,F,X,ot)=>{let ht=new Oe(new Qe(f,S,R),new yn({color:P}));return ht.position.set(F,X,ot),ht.userData.base=new le(P),v.add(ht),ht},et=Y(.24,.75,.26,"#26302A",-.14,.375,0),at=Y(.24,.75,.26,"#26302A",.14,.375,0);Y(.56,.7,.3,"#2F5A34",0,1.1,0);let Tt=Y(.18,.66,.2,"#E7CDA6",-.38,1.12,0),It=Y(.18,.66,.2,"#E7CDA6",.38,1.12,0);Y(.46,.42,.42,"#E7CDA6",0,1.66,0),Y(.5,.14,.46,"#151714",0,1.9,.02),Y(.12,.12,.05,"#E0352B",.16,1.92,-.24),[et,at,Tt,It].forEach(f=>{f.geometry.translate(0,-f.geometry.parameters.height/2+.05,0),f.position.y+=f.geometry.parameters.height/2-.05}),v.visible=!1,Q.add(v);let lt={},ft=f=>lt[f]||(lt[f]=(()=>{let S=new Image;S.src=bt[f];let R=new pn(S);return R.colorSpace=nn,S.onload=()=>{R.needsUpdate=!0},new es({map:R,depthWrite:!0,alphaTest:.3})})());function At(f,S,R,P){let F=new vs(ft(f));F.scale.set(.42,.42,1),Q.add(F),u.drops.push({id:f,s:F,p:{x:S,y:R,z:P},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let $t=(f,S,R)=>{let P=B.get(f,S,R);return h.flat.solid[P]===1&&(h.flat.boxes[P]||!0)},Ct=Object.fromEntries((a.mobs||[]).map(f=>[f.id,f])),Et=Xm(),qt=new Map,ne=0;function ce(f,S){for(let R=61;R>0;R--){let P=B.get(f,R,S);if(h.flat.solid[P])return B.get(f,R+1,S)||B.get(f,R+2,S)?null:{y:R+1,n:P};if(h.flat.liquid[P])return null}return null}function W(f,S,R,P=7){for(let F=-P;F<=P;F++)for(let X=-P;X<=P;X++)for(let ot=-P;ot<=P;ot++)if(h.flat.lightEmit[B.get(f+ot,S+F,R+X)])return!0;return!1}function Rt(f,S,R,P,F){let X=qm(Et,f,{x:S+.5,y:R,z:P+.5}),ot=s0(f,F);return qt.set(X.id,ot),Q.add(ot),X}let ut=new Set;function Pt(){for(let f of T.villages.around(u.p.x-64,u.p.z-64,u.p.x+64,u.p.z+64))if(!(ut.has(f.id)||!B.ready(f.x,f.z))){ut.add(f.id);for(let S=0;S<f.villagers;S++){let R=Im(f.id,S,p),P=f.x+(S%2?2:-2),F=f.z+(S-1),X=ce(P,F),ot=Rt(Ct.villager,P,X?X.y:f.y+1,F,R.prof.color);Object.assign(ot,{home:{x:f.x,z:f.z},village:f.id,role:R})}}}function Ot(f){if(Ct.villager&&Pt(),e==="overworld"&&u.horse&&!u.horseMob&&Ct.horse&&B.ready(u.horse.x,u.horse.z)){let ot=Rt(Ct.horse,Math.floor(u.horse.x),u.horse.y,Math.floor(u.horse.z));ot.tame=!0,u.horse.saddled&&Lf(ot),u.horseMob=ot}let S=Math.random()*Math.PI*2,R=14+Math.random()*14,P=Math.floor(u.p.x+Math.cos(S)*R),F=Math.floor(u.p.z+Math.sin(S)*R);if(!B.ready(P,F))return;let X=ce(P,F);if(X)if(ko(Et,"animal")<yc.animal&&X.n===h.num("grass")&&f>.3){let ot=Object.values(Ct).filter(vt=>vt.kind==="animal"&&(!vt.biome||vt.biome===T.biomeOf(P,F))),ht=ot[Math.floor(Math.random()*ot.length)],ct=1+Math.floor(Math.random()*3);for(let vt=0;vt<ct&&ko(Et,"animal")<yc.animal;vt++){let Gt=P+vt%2,se=F+(vt>>1),ie=ce(Gt,se);ie&&Rt(ht,Gt,ie.y,se)}}else t.quizMobs&&ko(Et,"quiz")<yc.quiz&&Ym(f,W(P,X.y,F))&&Ct.quizling&&Rt(e==="shadow"&&Ct.shadowling?Ct.shadowling:Ct.quizling,P,X.y,F)}function gt(f,S,R){ne+=f,ne>2.5&&u.started&&(ne=0,Ot(e==="shadow"?0:S));for(let P=Et.list.length-1;P>=0;P--){let F=Et.list[P],X=qt.get(F.id),ot=Math.hypot(F.p.x-u.p.x,F.p.z-u.p.z);if(F.riding){F.p.x=u.p.x,F.p.y=u.p.y,F.p.z=u.p.z,F.yaw=u.yaw,F.v.x=u.v.x,F.v.z=u.v.z,Mc(X,F,R/1e3);continue}if(F.gone){F.goneT=(F.goneT||0)+f,Mc(X,F,R/1e3),F.goneT>.35&&(Q.remove(X),qt.delete(F.id),Et.list.splice(P,1));continue}if($m(F,S,ot)){F.gone=!0,F.goneT=0,F.village&&ut.delete(F.village);continue}if(!B.ready(F.p.x,F.p.z))continue;Zm(F,u.p,f,Math.random),F.v.y-=20*f,F.v.y<-20&&(F.v.y=-20);let ht=nc(F.p,F.v,f,$t,{w:Math.min(.9,F.def.size[0]),h:F.def.size[1],canStep:!0,grounded:F.onGround});F.onGround=ht.onGround,h.flat.liquid[B.get(F.p.x,F.p.y+.3,F.p.z)]&&(F.v.y=2),Mc(X,F,R/1e3)}r0(.35+.65*S)}function Zt(f,S,R){let P,F;f==="screen"?(Sn.set(S/innerWidth*2-1,-(R/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize(),P={x:mt.position.x,y:mt.position.y,z:mt.position.z},F={x:Sn.x,y:Sn.y,z:Sn.z}):(P=Wo(),F=Ps());let X=f==="screen"?Kn("screen",S,R):Kn("center"),ot=null,ht=u.view==="tp"&&f==="screen"?8:4.5;X&&(ht=Math.min(ht,X.dist+.5));for(let ct of Et.list){if(ct.gone||ct.riding)continue;let vt=vc(P,F,ct.p,ct.def.size[0],ct.def.size[1]);vt!=null&&vt<ht&&(ht=vt,ot=ct)}for(let ct of u.vehicles){if(u.ride&&u.ride.veh===ct)continue;let vt=vc(P,F,ct.p,1.3,.9);vt!=null&&vt<ht&&(ht=vt,ot=ct.m)}if(u.boss){let ct=vc(P,F,u.boss.p,3.6,3.6);ct!=null&&ct<ht+1&&(ht=ct,ot=u.boss.m)}return ot}function Yt(){try{return jm(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Le(f){if(f.kind==="vehicle"){Ic(f.veh);return}if(f.kind==="boss"){w0();return}if(f.type==="horse"){m0(f);return}if(f.kind==="villager"){if(!t.trading){Nt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}fn(f);return}if(f.kind==="animal"&&b.slots[u.sel]&&b.slots[u.sel].id==="wheat"){t.consume&&qn(b,u.sel,1),Ce();let R=Date.now();f.love=R,Nt(`${f.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let P=ef(Et.list,f,R);if(P&&ko(Et,"animal")<tf){let F=Rt(f.def,Math.floor((f.p.x+P.p.x)/2),Math.floor(f.p.y),Math.floor((f.p.z+P.p.z)/2));qt.get(F.id).scale.setScalar(.65),f.love=0,P.love=0,Nt(`\u751F\u4E86\u4E00\u96BB\u5C0F${f.def.name_zh}\uFF01`),u.stats.bred=(u.stats.bred||0)+1,Ye("bred")}else P&&Nt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(f.kind==="animal"){let R=b.slots[u.sel],P=!!(R&&h.toolOf(R.id)&&h.toolOf(R.id).type==="sword"),F=Jm(f,P,Math.random);if(f.v.y=4,f.v.x+=(f.p.x-u.p.x)*1.5,f.v.z+=(f.p.z-u.p.z)*1.5,P){let X=Bo(b,u.sel,h);X.broke&&Nt(`\u4F60\u7684${h.name(X.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Ce()}if(F&&F.drops)for(let X=0;X<F.drops.n;X++)At(F.drops.id,f.p.x,f.p.y+.6,f.p.z);return}if(f.busy)return;f.busy=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),u.overlay="ask";let S=Yt().slice(0,30).sort(()=>Math.random()-.5);Wu(St.ov,{ids:S,onDone:(R,P)=>{if(u.overlay=null,f.busy=!1,R&&f.def.tough&&!f.hurt){f.hurt=!0,Nt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(R){let F=Km(!0,P)+(f.def.tough?2:0);Ti(A,F),Dn(),f.gone=!0,f.goneT=0,Nt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${F} \u91D1\u5E63`),u.dirtyMeta=!0,wn(),u.stats.quizWins=(u.stats.quizWins||0)+1,Ye("quiz_wins")}else if(R===!1){let F=u.p.x-f.p.x,X=u.p.z-f.p.z,ot=Math.hypot(F,X)||1;u.v.x=F/ot*7,u.v.z=X/ot*7,u.v.y=4.5,f.p.x-=F/ot*1.5,f.p.z-=X/ot*1.5,Nt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let xe=(f,S,R)=>B.get(f,S,R),un=(f,S,R)=>{let P=h.get(B.get(f,S,R));return P&&P.rail?{shape:P.rail,powered:!!P.powered}:null},St=eb();function Nt(f){for(;St.toasts.children.length>3;)St.toasts.firstChild.remove();let S=U("div",{class:"toast"},f);St.toasts.append(S),setTimeout(()=>S.remove(),2200)}function wc(f){let S=U("div",{class:"toast ach"},U("i",{class:"badge"}),U("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",U("b",{},f.name_zh),f.coins&&t.coins?`\u3000+${f.coins} \u91D1\u5E63`:""));St.toasts.append(S),setTimeout(()=>S.remove(),3500)}function Ye(f,S=1){Zp(C,f,S),u.dirtyMeta=!0;for(let R of Jp(C,N))wc(R),R.coins&&t.coins&&(Ti(A,R.coins),Dn())}function wr(f,S,R,P){Ye("placed"),P==="torch"&&Ye("place:torch");let F=u.recentPlaced||(u.recentPlaced=[]);F.push([f,S,R]),F.length>80&&F.shift(),!C.done.house&&jp(F,f,S,R)>=30&&Ye("house")}function Ac(){let f=!1;for(let S of Xe())C.stats["boss:"+S]||(C.stats["boss:"+S]=1,f=!0);f&&Ye("boss",0)}let Ar=A.coins;function Dn(){A.coins>Ar&&mn("coin"),Ar=A.coins,St.coins.textContent=A.coins}let ui="";function Ri(){let f=Af(E.hp),S=f.join();S!==ui&&(ui=S,St.hearts.innerHTML="",f.forEach(R=>St.hearts.append(U("i",{class:"ht "+R}))))}function Er(f){if(u.dead||f<=0||!t.damage)return;let S=f,R=Fo(u.armor,h);if(f=ju(f,R),R&&(Ku(u.armor,u.armorDur,h,S).forEach(X=>Nt(`\u4F60\u7684${h.name(X)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),j(),u.dirtyMeta=!0),f<=0)return;let P=bf(E,f);Ri(),u.dirtyMeta=!0,mn("hurt"),St.flash.classList.remove("on"),St.flash.offsetWidth,St.flash.classList.add("on"),P&&Go()}function Go(){Pr(!0),u.dead=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),u.overlay="dead";let f=St.ov;f.innerHTML="",f.hidden=!1,f.append(U("div",{class:"panel start"},U("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),U("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),U("button",{class:"btn big",onclick:Cs},u.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Cs(){let f=wf(u.bed,pt,!!u.bed&&e==="overworld");u.p={x:f.x,y:f.y,z:f.z},u.v={x:0,y:0,z:0},u.fallTop=f.y,E.hp=20,u.dead=!1,Ri(),he(),u.dirtyMeta=!0,Nt(u.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Ce(){St.hotbar.innerHTML="";for(let S=0;S<9;S++){let R=b.slots[S];St.hotbar.append(U("button",{class:"slot"+(S===u.sel?" on":""),"aria-label":R?h.name(R.id):"\u7A7A\u683C",onpointerdown:P=>{P.stopPropagation(),u.sel=S,Ce()}},R?U("img",{src:bt[R.id],alt:""}):null,R&&R.count>1?U("span",{class:"cnt"},R.count):null,ds(R),U("span",{class:"key"},S+1)))}let f=b.slots[u.sel];St.selName.textContent=f?h.name(f.id):""}function ds(f){let S=Wm(f,h);return!S||S.left>=S.max?null:U("span",{class:"dur"+(S.frac<.25?" low":"")},U("i",{style:"width:"+Math.round(S.frac*100)+"%"}))}function Ho(f=4){let S=new Set,R=Math.floor(u.p.x),P=Math.floor(u.p.y),F=Math.floor(u.p.z);for(let X=-f;X<=f;X++)for(let ot=-f;ot<=f;ot++)for(let ht=-f;ht<=f;ht++){let ct=B.get(R+ht,P+X,F+ot);ct&&S.add(h.get(ct).id)}return S}let Rs=()=>({near:Ho(),owned:new Set(A.owned)}),Ec=-1,$n=null,Is=null,ps=f=>f==="inv"?b:f==="chest"?O[Is]:null,Tr=(f,S)=>f==="armor"?u.armor[S]?{id:u.armor[S],count:1,dur:u.armorDur[S]}:null:ps(f).slots[S];function w(f,S,R){if(!$n){Tr(f,S)&&($n={c:f,i:S}),R();return}let P=$n;if($n=null,P.c===f&&P.i===S){R();return}if(f==="armor"||P.c==="armor"){let[F,X,ot,ht]=f==="armor"?[P.c,P.i,f,S]:[f,S,P.c,P.i];if(F==="armor"){R();return}let ct=ps(F),vt=ct.slots[X],Gt=vt&&h.get(vt.id),se=u.armor[ht];if(vt&&!(Gt.armor&&Gt.armor.slot===ht)){Nt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),R();return}let ie=u.armorDur[ht],Fe=se?Number.isFinite(ie)?{id:se,count:1,dur:ie}:{id:se,count:1}:null;vt?(u.armor[ht]=vt.id,u.armorDur[ht]=Number.isFinite(vt.dur)?vt.dur:null,vt.count>1?(vt.count--,Fe&&bn(ct,se,1,_)):ct.slots[X]=Fe):se&&(u.armor[ht]=null,u.armorDur[ht]=null,ct.slots[X]=Fe),j(),u.dirtyMeta=!0,Ce(),R();return}P.c===f?Du(ps(f),P.i,S,_):Uu(ps(P.c),P.i,ps(f),S,_),u.dirtyMeta=!0,Ce(),R()}let G=(f,S,R,P="")=>{let F=Tr(f,S),X=$n&&$n.c===f&&$n.i===S;return U("button",{class:"slot"+(X?" pick":"")+P,title:F?h.name(F.id):"",onclick:()=>w(f,S,R)},F?U("img",{src:bt[F.id],alt:""}):null,F&&F.count>1?U("span",{class:"cnt"},F.count):null,ds(F))},rt=["\u982D","\u8EAB","\u817F","\u8173"];function tt(f){let S=Fo(u.armor,h);return U("div",{class:"armor-row"},rt.map((R,P)=>U("div",{class:"armor-slot"},G("armor",P,f),U("small",{},R))),U("small",{class:"muted"},`\u8B77\u7532 ${S} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,S*4)}%\uFF09`))}function j(){if(St.armor){let f=Fo(u.armor,h);St.armor.textContent=f?`\u8B77\u7532 ${f}`:""}}function Dt(){let f=St.ov;f.innerHTML="",f.hidden=!1;let S=O[Is]||(O[Is]=Io(27)),R=U("div",{class:"inv-grid"});for(let X=0;X<27;X++)R.append(G("chest",X,Dt));let P=U("div",{class:"inv-grid"});for(let X=9;X<36;X++)P.append(G("inv",X,Dt));let F=U("div",{class:"inv-grid hbrow"});for(let X=0;X<9;X++)F.append(G("inv",X,Dt," hb"));return f.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u7BB1\u5B50"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),R,U("h3",{},"\u80CC\u5305"),P,F)),S}function zt(){let f=St.ov;f.innerHTML="",f.hidden=!1;let S=U("div",{class:"inv-grid"}),R=ht=>G("inv",ht,zt,ht<9?" hb":"");for(let ht=9;ht<36;ht++)S.append(R(ht));let P=U("div",{class:"inv-grid hbrow"});for(let ht=0;ht<9;ht++)P.append(R(ht));let F=U("div",{class:"craft"},U("h3",{},"\u5408\u6210"));if(t.creative){let ht=U("div",{class:"craft"},U("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),U("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),ct=U("div",{class:"cat-grid"});Om(h).forEach(vt=>ct.append(U("button",{class:"slot",title:h.name(vt),onclick:()=>{b.slots[u.sel]={id:vt,count:64},u.dirtyMeta=!0,Ce(),zt(),Nt(`${h.name(vt)} \u653E\u9032\u7B2C ${u.sel+1} \u683C`)}},U("img",{src:bt[vt],alt:""})))),ht.append(ct),f.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("div",{class:"inv-wrap"},U("div",{},U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),S,P),ht)));return}let X=Rs(),ot={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};g.forEach(ht=>{let ct=cc(b,ht,X),vt=ct.ok;ht.blueprint&&ct.reason==="blueprint"&&!Object.keys(ht.in).some(Gt=>Gt!=="stick"&&hi(b,Gt)>0)||F.append(U("div",{class:"rcp"+(vt?"":" no")},U("img",{src:bt[ht.out.id],alt:""}),U("div",{class:"rcp-t"},U("b",{},`${ht.name_zh} \xD7${ht.out.count}`),U("small",{},Object.keys(ht.in).map(Gt=>`${h.name(Gt)} ${hi(b,Gt)}/${ht.in[Gt]}`).join("\u3001")+(ot[ct.reason]?"\u3000\xB7 "+ot[ct.reason]:""))),U("button",{class:"btn small",onclick:()=>{let Gt=Nu(b,ht,_,Rs());Gt.ok?(Nt(`\u505A\u597D\u4E86\uFF1A${ht.name_zh} \xD7${ht.out.count}`),u.dirtyMeta=!0,Ye("craft:"+ht.out.id)):Nt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Gt.reason]||"\u6750\u6599\u4E0D\u5920"),zt(),Ce()}},"\u88FD\u4F5C")))}),f.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u80CC\u5305"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("div",{class:"inv-wrap"},U("div",{},U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),tt(zt),S,P),F)))}let Ut=cm(h);function Wt(){let f=St.ov;f.innerHTML="",f.hidden=!1;let S=U("div",{class:"shop"}),R=i0(I,Xe());Ut.filter(P=>!P.id.startsWith("portal_")||R&&P.id===R.block).forEach(P=>S.append(U("div",{class:"offer"+(P.locked?" locked":"")},U("img",{src:bt[P.id],alt:""}),U("div",{class:"of-t"},U("b",{},`${P.name_zh}${P.qty>1?" \xD7"+P.qty:""}`),U("small",{},P.locked?`\uFF08${P.locked}\uFF09`:`${P.price} \u91D1\u5E63${P.desc?"\u3000"+P.desc:""}`)),_r(A,P.id)?U("span",{class:"owned"},"\u5DF2\u64C1\u6709"):U("button",{class:"btn small",disabled:P.locked?!0:null,onclick:()=>Kt(P)},P.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),f.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u5546\u5E97\u3000",U("span",{class:"coin"}),` ${A.coins}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),S))}function Kt(f){let S=hm(A,b,f,_);S.ok?(Nt(f.blueprint?`\u62FF\u5230 ${f.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${f.name_zh} \xD7${f.qty}`),u.dirtyMeta=!0,Dn(),Ce(),wn()):Nt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[S.reason]||"\u8CB7\u4E0D\u4E86"),Wt()}let fe=null;function me(){let f=St.ov,S=q[fe]||(q[fe]=pf());f.innerHTML="",f.hidden=!1;let R=S.jobs[0],P=U("div",{class:"shop"});K.forEach(X=>{let ot=hi(b,X.in);P.append(U("div",{class:"offer"+(ot?"":" locked")},U("img",{src:bt[X.in],alt:""}),U("div",{class:"of-t"},U("b",{},`${h.name(X.in)} \u2192 ${h.name(X.out)}`),U("small",{},`\u6709 ${ot} \u500B \xB7 \u6BCF\u500B ${X.time} \u79D2`)),U("button",{class:"btn small",onclick:()=>{let ht=mf(S,b,X,J);ht.ok||Nt(ht.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),u.dirtyMeta=!0,Ce(),me()}},"\u653E\u9032\u53BB")))});let F=Object.values(S.done).reduce((X,ot)=>X+ot,0);f.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u7194\u7210"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,S.fuel-S.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${hi(b,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${J} \u500B\uFF09`),U("div",{class:"furnace-st"},R?`\u6B63\u5728\u71D2\uFF1A${h.name(R.in)}\uFF08\u9084\u8981 ${Math.ceil(R.left)} \u79D2\uFF0C\u6392\u968A ${S.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),U("div",{class:"row"},U("button",{class:"btn",disabled:F?null:!0,onclick:()=>{let X=xf(S,b,_);X&&(Nt(`\u62FF\u51FA ${X} \u500B`),Ye("smelted",X)),u.dirtyMeta=!0,Ce(),me()}},`\u62FF\u51FA\u4F86\uFF08${F}\uFF09`)),P))}let Xt=null,Ee=(f,S)=>{try{return JSON.parse(localStorage.getItem(f)||"null")||S}catch{return S}},Xe=()=>n0(Ee("hw_portal_rewards",[]),Ee("hi_save",null),I),ke='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function Ne(){let f=I.find(F=>F.map===Xt),S=St.ov;if(S.innerHTML="",S.hidden=!1,!f){he();return}let R=Object.keys(f.reward.items).map(F=>`${h.name(F)} \xD7${f.reward.items[F]}`).join("\u3001"),P=Tf(f.map,I,Xe());if(!P.ok){S.append(U("div",{class:"panel start"},U("div",{class:"p-head"},U("h2",{},"\u50B3\u9001\u9580\u30FB"+f.name_zh),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("div",{class:"padlock",html:ke}),U("p",{class:"big"},`\u5148\u6253\u5012 ${P.need.boss_zh} \u624D\u80FD\u9032\u5165`),U("p",{class:"muted"},`\u5F9E\u300C${P.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${P.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:he},"\u77E5\u9053\u4E86"))));return}S.append(U("div",{class:"panel start"},U("div",{class:"p-head"},U("h2",{},"\u50B3\u9001\u9580\u30FB"+f.name_zh),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${f.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${f.reward.coins} \u91D1\u5E63\u3001${R}\u3002`),U("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),U("div",{class:"row"},U("button",{class:"btn big",onclick:async()=>{await wn(),u.leaving=Qm(f.map),location.href=u.leaving}},"\u9032\u5165"),U("button",{class:"btn ghost",onclick:he},"\u5148\u4E0D\u8981"))))}function tn(){if(!t.portals)return 0;let f;try{f=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{f=[]}let S=t0(f,z);for(let R of S){let P=e0(R,I,b,A,_);if(z.push(R.id),!!P.ok){for(let F in P.leftovers)for(let X=0;X<P.leftovers[F];X++)At(F,u.p.x,u.p.y+1,u.p.z);Nt(`\u5F9E${P.name_zh}\u5E36\u56DE\u4F86\uFF1A${P.coins} \u91D1\u5E63\u3001${Object.keys(P.items).map(F=>h.name(F)+" \xD7"+P.items[F]).join("\u3001")}`)}}return S.length&&(Dn(),Ce(),u.dirtyMeta=!0,wn()),Ac(),S.length}let Bt=null;function fn(f){Bt=f,f.busy=!0,pe("trade")}function be(){let f=Bt,S=St.ov;if(!f)return he();S.innerHTML="",S.hidden=!1;let R=f.role,P=Dm(),F=U("div",{class:"shop"});R.prof.offers.forEach(ot=>{let ht=ot.blueprint||ot.give,ct=!!ot.blueprint,vt=ct&&h.blueprints.find(se=>se.id===ot.blueprint),Gt=ct&&_r(A,ot.blueprint);F.append(U("div",{class:"offer"},U("img",{src:bt[ht],alt:""}),U("div",{class:"of-t"},U("b",{},ct?vt.name_zh:`${h.name(ht)}${ot.count>1?" \xD7"+ot.count:""}`),U("small",{},`${ot.price} \u91D1\u5E63${ct?"\u3000"+(vt.desc||""):""}`)),Gt?U("span",{class:"owned"},"\u5DF2\u64C1\u6709"):U("button",{class:"btn small",onclick:()=>{let se=Pm(A,b,ot,_);se.ok?(mn("trade"),Ye("traded"),Nt(ct?`\u62FF\u5230 ${vt.name_zh}\uFF01`:`\u8CB7\u5230 ${h.name(ht)} \xD7${ot.count}`),u.dirtyMeta=!0,Dn(),Ce(),wn()):Nt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[se.reason]||"\u8CB7\u4E0D\u4E86"),be()}},"\u8CFC\u8CB7")))});let X=U("div",{class:"quests"});R.quests.forEach(ot=>{let ht=Xu(k,ot,P),ct=Object.keys(ot.reward.items||{}).map(vt=>`${h.name(vt)} \xD7${ot.reward.items[vt]}`).join("\u3001");X.append(U("div",{class:"offer quest"+(ht?" locked":"")},U("div",{class:"of-t"},U("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+ot.title_zh),U("small",{},`${ot.desc}\uFF0C\u7B54\u5C0D ${ot.need} \u984C \u2192 ${ot.reward.coins} \u91D1\u5E63\u3001${ct}`)),ht?U("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):U("button",{class:"btn small",onclick:()=>{u.overlay="quest",Rm(St.ov,{quest:ot,onDone:vt=>{if(u.overlay="trade",vt>=0){let Gt=Lm(k,ot,vt,P,A,b,_);if(Gt.ok){for(let se in Gt.leftovers)for(let ie=0;ie<Gt.leftovers[se];ie++)At(se,u.p.x,u.p.y+1,u.p.z);Nt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Gt.coins} \u91D1\u5E63\u3001${ct}`),Dn(),Ce(),u.dirtyMeta=!0,wn(),u.stats.quests=(u.stats.quests||0)+1,Ye("quests")}else Nt(`\u7B54\u5C0D ${vt} \u984C\uFF0C\u8981 ${ot.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}be()}})}},"\u63A5\u59D4\u8A17")))}),S.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},`\u6751\u6C11\u30FB${R.prof.name_zh}\u3000`,U("span",{class:"coin"}),` ${A.coins}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("h3",{},"\u4EA4\u6613"),F,U("h3",{},"\u82F1\u6587\u59D4\u8A17"),U("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),X))}function Rn(){let f=St.ov;f.innerHTML="",f.hidden=!1;let S=U("b",{},B.rd),R=U("input",{type:"range",min:2,max:6,step:1,value:B.rd,oninput:P=>{S.textContent=P.target.value},onchange:P=>{let F=+P.target.value;B.setRenderDistance(F),mt.far=F*16+40,mt.updateProjectionMatrix(),Sr("hw_rd",F)}});f.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u8A2D\u5B9A"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",S,R),U("label",{class:"set"},"\u97F3\u6A02",U("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:P=>xc({music:+P.target.value,muted:!1})})),U("label",{class:"set"},"\u97F3\u6548",U("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:P=>{xc({sfx:+P.target.value,muted:!1}),mn("place","wood")}})),t.creative?U("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",U("input",{type:"checkbox",checked:br("hw_weather","on")!=="off"?!0:null,onchange:P=>Sr("hw_weather",P.target.checked?"on":"off")})):null,U("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:Wi},"\u91CD\u7F6E\u4E16\u754C"),t.creative?U("button",{class:"btn",onclick:()=>In("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):U("button",{class:"btn",onclick:fi},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),U("div",{id:"pinbox"}),U("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),U("p",{},U("a",{class:"home-link",href:"../../#s/game",onclick:()=>{wn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),U("p",{class:"muted small"},"\u7248\u672C "+bc)))}async function In(f){await wn(),Sr("hw_mode",f),u.resetting=!0,location.reload()}function fi(){let f=document.getElementById("pinbox"),S=window.KSParentPin;if(f.innerHTML="",!S||!S.isSet()){f.append(U("div",{class:"pin-ask"},U("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),U("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let R=U("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),P=()=>{let F=Um(S,R.value.trim());F.ok?In("creative"):(Nt(F.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),R.value="")};R.addEventListener("keydown",F=>{F.stopPropagation(),F.key==="Enter"&&P()}),f.append(U("div",{class:"pin-ask"},U("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),U("div",{class:"typerow"},R,U("button",{class:"btn",onclick:P},"\u78BA\u5B9A")))),setTimeout(()=>R.focus(),50)}async function Wi(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){u.resetting=!0,Sr("hw_dim","overworld");try{await Em(["hw_coins"])}catch(f){console.warn(f)}location.reload()}}function pe(f){document.pointerLockElement&&document.exitPointerLock(),u.overlay=f,kn(),f==="inv"?(Ec=-1,$n=null,zt()):f==="shop"?Wt():f==="set"?Rn():f==="furnace"?me():f==="portal"?Ne():f==="trade"?be():f==="chest"?($n=null,Dt()):f==="map"?Nc():f==="ach"?M0():f==="quiz"&&Cm(St.ov,{onAnswer:()=>Ye("stele_answers"),onReward:S=>{Ti(A,S),Dn(),u.dirtyMeta=!0,wn()},onClose:()=>{u.overlay=null}})}function he(){St.ov.hidden=!0,St.ov.innerHTML="",u.overlay=null,Bt&&(Bt.busy=!1,Bt=null)}let Zn=()=>{St.btnSnd.textContent=Oo()?"\u{1F507}":"\u{1F50A}"};St.btnSnd.onclick=()=>{mc(),sf(),Zn()},["pointerdown","keydown"].forEach(f=>addEventListener(f,()=>mc(),{capture:!0,once:!0})),Zn(),St.btnInv.onclick=()=>u.overlay==="inv"?he():pe("inv"),St.btnShop.onclick=()=>u.overlay==="shop"?he():pe("shop"),St.btnSet.onclick=()=>u.overlay==="set"?he():pe("set"),St.btnView.onclick=()=>Ue(),St.bRide.onclick=()=>Pr(),St.bMap.onclick=()=>u.overlay==="map"?he():pe("map"),St.bAch.onclick=()=>u.overlay==="ach"?he():pe("ach");function Ue(){u.view=u.view==="fp"?"tp":"fp",Nt(u.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Jn(){u.ride||(u.fly=!u.fly,u.v.y=0,St.root.classList.toggle("flying",u.fly),Nt(u.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Sn=new Z;function Ps(){let f=Math.cos(u.pitch);return{x:-Math.sin(u.yaw)*f,y:Math.sin(u.pitch),z:-Math.cos(u.yaw)*f}}let Wo=()=>({x:u.p.x,y:u.p.y+1.62+u.eyeOff+(u.ride?a0[u.ride.kind]:0),z:u.p.z}),Rf=f=>f&&!h.flat.liquid[f],Tc=f=>h.flat.boxes[f]||(h.flat.shape[f]===4?l0:h.flat.shape[f]===8?c0:null);function Kn(f,S,R){if(f==="screen"){Sn.set(S/innerWidth*2-1,-(R/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize();let ot=mt.position,ht=u.view==="tp"?ot.distanceTo(new Z(u.p.x,u.p.y+1.62,u.p.z)):0,ct={x:ot.x,y:ot.y,z:ot.z},vt={x:Sn.x,y:Sn.y,z:Sn.z};u.lastRay={o:ct,d:vt};let Gt=mr(ct,vt,Sc+1+ht,xe,Rf,Tc);return Gt&&(Gt.at={x:ct.x+vt.x*Gt.dist,y:ct.y+vt.y*Gt.dist,z:ct.z+vt.z*Gt.dist}),Gt}let P=Wo(),F=Ps();u.lastRay={o:P,d:F};let X=mr(P,F,Sc,xe,Rf,Tc);return X&&(X.at={x:P.x+F.x*X.dist,y:P.y+F.y*X.dist,z:P.z+F.z*X.dist}),X}function kn(){u.mining.active=!1,u.mining.k="",u.mining.t=0,Qt.visible=!1}function h0(f,S,R){mn("door");let P=h.get(B.get(f,S,R)),F=h.get(P.openAs||P.closeAs);if(!F)return;let X=ht=>{let ct=h.get(ht);return ct&&ct.interact==="door"},ot=S;for(;X(B.get(f,ot-1,R));)ot--;for(let ht=ot;X(B.get(f,ht,R));ht++)B.set(f,ht,R,F.n);u.dirtyMeta=!0}let If=()=>{let f=b.slots[u.sel];return f?h.toolOf(f.id):null};function u0(f){let S=f.n,R=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:_c(h.get(S),If());if(!B.set(f.x,f.y,f.z,0))return;let P=f.x+","+f.y+","+f.z,F=h.get(S);if(O[P]){if(t.drops){for(let ct of O[P].slots)if(ct)for(let vt=0;vt<ct.count;vt++)At(ct.id,f.x+.5,f.y+.4,f.z+.5)}delete O[P]}if(F&&F.crop){if(delete V[P],t.drops)for(let ct of Zu(F.stage|0))for(let vt=0;vt<ct.n;vt++)At(ct.id,f.x+.5,f.y+.3,f.z+.5);u.stats.harvested=(u.stats.harvested||0)+(F.stage===3?1:0),F.stage===3&&Ye("harvested"),u.dirtyMeta=!0;return}let X=R.harvest?h.dropOf(S):null;X&&At(X,f.x+.5,f.y+.4,f.z+.5),t.drops&&F.pattern==="leaves"&&Math.random()<(d.appleChance||.1)?At("apple",f.x+.5,f.y+.4,f.z+.5):!R.harvest&&!R.creative&&Nt(`${h.name(S)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let ot=B.get(f.x,f.y+1,f.z);if(h.flat.plant[ot]){delete V[f.x+","+(f.y+1)+","+f.z],B.set(f.x,f.y+1,f.z,0);let ct=t.drops&&h.dropOf(ot);ct&&At(ct,f.x+.5,f.y+1.3,f.z+.5)}if(h.get(S).interact==="door")for(let ct of[-1,1]){let vt=B.get(f.x,f.y+ct,f.z);h.get(vt)&&h.get(vt).interact==="door"&&B.set(f.x,f.y+ct,f.z,0)}let ht=f.x+","+f.y+","+f.z;if(u.bed&&u.bed.x===f.x&&u.bed.y===f.y&&u.bed.z===f.z&&(u.bed=null,Nt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),q[ht]){let ct=_f(q[ht]);for(let vt in ct)for(let Gt=0;Gt<ct[vt];Gt++)At(vt,f.x+.5,f.y+.4,f.z+.5);delete q[ht]}if(R.usesTool){let ct=Bo(b,u.sel,h);ct.broke&&Nt(`\u4F60\u7684${h.name(ct.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Ce()}u.dirtyMeta=!0,u.stats.mined++,mn("break",vr(F)),Ye("mine:"+(F.pattern==="log"?"wood":F.id))}function Cr(f){let S=b.slots[u.sel],R=S&&h.get(S.id);if(R&&R.food)return t.damage?(Qu(E,R.food,20)?(mn("eat"),qn(b,u.sel,1),Ri(),Ce(),u.dirtyMeta=!0,Nt(`\u5403\u4E86${R.name_zh}\uFF0C\u597D\u98FD\uFF01`),u.stats.ate=(u.stats.ate||0)+1):Nt("\u73FE\u5728\u4E0D\u9913"),!0):(Nt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(R&&R.id==="shadow_flint"){if(!t.portals)return Nt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let kt=h.num("dark_crystal"),jt=f&&f.n===kt?Cu((Ie,$e,Vn)=>B.get(Ie,$e,Vn),f.x,f.y,f.z,kt):null;if(!jt)return Nt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let we=h.num("shadow_portal");for(let Ie of jt)B.set(Ie[0],Ie[1],Ie[2],we);return qn(b,u.sel,1),Ce(),u.dirtyMeta=!0,Nt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(R&&R.id==="fishing_rod")return u.fish?_0():x0(),!0;if(R&&R.place==="boat"){if(u.ride)return Nt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let kt=u.lastRay,jt=kt&&mr(kt.o,kt.d,Sc+1,xe,Ie=>h.flat.liquid[Ie]||h.flat.solid[Ie]);if(!jt||!h.flat.liquid[jt.n]||B.get(jt.x,jt.y+1,jt.z))return Nt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;u.p={x:jt.x+.5,y:jt.y+1-.15,z:jt.z+.5};let we=Cc("boat",u.p,u.yaw,{y:jt.y+1});return t.consume&&qn(b,u.sel,1),Ce(),Ir("boat",{y:jt.y+1,veh:we}),!0}if(R&&R.place==="minecart"){if(u.ride)return Nt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let kt=f&&h.get(f.n);if(!kt||!kt.rail)return Nt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let jt=_u(kt.rail,f.x,f.y,f.z,-Math.sin(u.yaw),-Math.cos(u.yaw),$e=>!!Eo(un,f.x,f.y,f.z,$e,kt.rail)),we=rc(jt),Ie=Cc("minecart",{x:we.x,y:we.y+.05,z:we.z},we.yaw,{st:jt});return t.consume&&qn(b,u.sel,1),Ce(),Ir("minecart",{st:jt,veh:Ie}),!0}if(!f)return!1;let P=h.get(f.n);if(P&&P.interact==="chest")return mn("chest"),Is=f.x+","+f.y+","+f.z,pe("chest"),!0;let F=R&&h.toolOf(S.id);if(F&&F.type==="hoe"&&$u(P.id,!B.get(f.x,f.y+1,f.z)||h.flat.plant[B.get(f.x,f.y+1,f.z)])){if(B.set(f.x,f.y+1,f.z,0),B.set(f.x,f.y,f.z,h.num("farmland")),t.consume){let kt=Bo(b,u.sel,h);kt.broke&&Nt(`\u4F60\u7684${h.name(kt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return Ce(),u.dirtyMeta=!0,!0}if(R&&R.place==="crop")return P.id!=="farmland"||f.face[1]!==1||B.get(f.x,f.y+1,f.z)?(Nt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(B.set(f.x,f.y+1,f.z,h.num("wheat_0")),V[f.x+","+(f.y+1)+","+f.z]={t:Date.now(),wet:Ju(xe,kt=>h.flat.liquid[kt]===1,f.x,f.y,f.z)},t.consume&&qn(b,u.sel,1),Ce(),u.dirtyMeta=!0,u.stats.planted=(u.stats.planted||0)+1,!0);let X=h.get(f.n);if(X&&X.interact==="quiz")return t.coins?(pe("quiz"),!0):(Nt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let ot=b.slots[u.sel]&&h.get(b.slots[u.sel].id).placeable;if(X&&X.interact==="door")return h0(f.x,f.y,f.z),!0;if(X&&X.interact==="portal"&&!ot&&!t.portals)return Nt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(X&&X.interact==="portal"&&!ot)return Xt=X.portal,pe("portal"),!0;if(X&&X.interact==="bed"&&!ot&&e==="shadow")return Nt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(X&&X.interact==="bed"&&!ot)return u.bed={x:f.x,y:f.y,z:f.z},u.dirtyMeta=!0,Ye("bed"),Nt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(X&&X.interact==="craft"&&!ot)return pe("inv"),!0;if(X&&X.interact==="furnace"&&!ot)return fe=f.x+","+f.y+","+f.z,pe("furnace"),!0;let ht=b.slots[u.sel];if(!ht)return Nt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let ct=h.get(ht.id);if(!ct||!ct.placeable)return Nt(`${h.name(ht.id)} \u4E0D\u80FD\u653E`),!1;if(ct.place==="slab"&&ct.fullAs&&f.n===ct.n&&f.face[1]===1&&B.set(f.x,f.y,f.z,h.num(ct.fullAs)))return t.consume&&qn(b,u.sel,1),Ce(),u.stats.placed++,u.dirtyMeta=!0,!0;let vt=h.flat.plant[f.n]&&!h.flat.plant[ct.n],Gt=vt?f.x:f.x+f.face[0],se=vt?f.y:f.y+f.face[1],ie=vt?f.z:f.z+f.face[2];if(se<0||se>=64)return!1;let Fe=B.get(Gt,se,ie);if(Fe&&!h.flat.liquid[Fe]&&!(vt&&h.flat.plant[Fe]))return!1;let Re=.6/2;if(ct.solid&&Gt+1>u.p.x-Re&&Gt<u.p.x+Re&&ie+1>u.p.z-Re&&ie<u.p.z+Re&&se+1>u.p.y&&se<u.p.y+1.8)return!1;if(h.flat.plant[ct.n]&&!h.flat.solid[B.get(Gt,se-1,ie)])return Nt(`${ct.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let rn=ct.n;if(ct.place==="slab"){let kt=f.at?f.at.y-Math.floor(f.at.y):0;(f.face[1]===-1||f.face[1]===0&&kt>.5)&&h.get(ct.id+"_top")&&(rn=h.num(ct.id+"_top"))}else if(ct.place==="stairs"){let kt=-Math.sin(u.yaw),jt=-Math.cos(u.yaw),we=Math.abs(kt)>Math.abs(jt)?kt>0?1:3:jt>0?2:0,Ie=h.get(ct.id+["","_e","_s","_w"][we]);Ie&&(rn=Ie.n)}let ge=null;if(ct.place==="rail"){if(!h.flat.solid[B.get(Gt,se-1,ie)])return Nt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let kt=-Math.sin(u.yaw),jt=-Math.cos(u.yaw),we=sc(un,Gt,se,ie,!!ct.powered,Math.abs(kt)>Math.abs(jt)?"e":"n");rn=h.num(Ao(!!ct.powered,we.shape)),ge=we.updates}if(!B.set(Gt,se,ie,rn))return!1;if(ge)for(let[kt,jt,we,Ie]of ge){let $e=un(kt,jt,we);$e&&B.set(kt,jt,we,h.num(Ao($e.powered,Ie)))}return mn("place",vr(ct)),ct.interact==="door"&&!B.get(Gt,se+1,ie)&&B.set(Gt,se+1,ie,ct.n),t.consume&&qn(b,u.sel,1),u.dirtyMeta=!0,Ce(),u.stats.placed++,wr(Gt,se,ie,ct.id),!0}let Rr={},Xo=f=>Rr[f]||(Rr[f]=(()=>{let S=new yn({color:f});return S.userData.base=new le(f),S})());function f0(f){let S=new dn,R=(P,F,X,ot,ht,ct,vt)=>{let Gt=new Oe(new Qe(P,F,X),Xo(ot));Gt.position.set(ht,ct,vt),S.add(Gt)};if(f==="boat"){R(.9,.08,1.5,"#8C6640",0,.04,0);for(let P of[-1,1])R(.08,.3,1.5,"#A97E4E",P*.45,.19,0),R(.9,.3,.08,"#A97E4E",0,.19,P*.75);R(.9,.06,.25,"#C49A63",0,.25,.1)}else{R(.9,.08,1.1,"#5E6660",0,.12,0);for(let P of[-1,1])R(.08,.45,1.1,"#8C8A84",P*.45,.35,0),R(.9,.45,.08,"#8C8A84",0,.35,P*.55),R(.06,.18,.18,"#26302A",P*.47,.1,.35),R(.06,.18,.18,"#26302A",P*.47,.1,-.35)}return S}u.vehicles=[];function Cc(f,S,R,P){let F=f0(f);F.rotation.order="YXZ",F.position.set(S.x,S.y,S.z),F.rotation.y=R,Q.add(F);let X=Object.assign({kind:f,p:{x:S.x,y:S.y,z:S.z},yaw:R,obj:F,hits:0},P);return X.m={kind:"vehicle",veh:X,id:-2},u.vehicles.push(X),X}function Rc(f){u.ride||u.dead||(u.p={x:f.p.x,y:f.p.y,z:f.p.z},f.kind==="boat"?Ir("boat",{y:f.y,veh:f}):(f.st.v=0,Ir("minecart",{st:f.st,veh:f})))}function Ic(f){if(!(u.ride&&u.ride.veh===f)){if(f.hits++,f.hits<2){Nt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),f.obj.position.y=f.p.y+.15,setTimeout(()=>{f.obj.position.y=f.p.y},120);return}u.vehicles.splice(u.vehicles.indexOf(f),1),Q.remove(f.obj),At(f.kind,f.p.x,f.p.y+.5,f.p.z),u.dirtyMeta=!0,Nt(f.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Ls=new dn,Pf=new yn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),Pc=[0,1].map(()=>{let f=new Oe(new Qe(1,1,1),Pf);return Ls.add(f),f});Ls.visible=!1,Q.add(Ls);function d0(f){let S=b.slots[u.sel],R=S&&h.get(S.id);if(!f||!R||!R.placeable)return null;let P=h.get(f.n);if(P&&["chest","quiz","door"].includes(P.interact))return null;if(R.place==="slab"&&R.fullAs&&f.n===R.n&&f.face[1]===1)return{x:f.x,y:f.y,z:f.z,n:h.num(R.fullAs)};let F=h.flat.plant[f.n]&&!h.flat.plant[R.n],X=F?f.x:f.x+f.face[0],ot=F?f.y:f.y+f.face[1],ht=F?f.z:f.z+f.face[2];if(ot<0||ot>=64)return null;let ct=B.get(X,ot,ht);if(ct&&!h.flat.liquid[ct]&&!(F&&h.flat.plant[ct]))return null;let vt=R.n;if(R.place==="slab"){let Gt=f.at?f.at.y-Math.floor(f.at.y):0;(f.face[1]===-1||f.face[1]===0&&Gt>.5)&&h.get(R.id+"_top")&&(vt=h.num(R.id+"_top"))}else if(R.place==="stairs"){let Gt=-Math.sin(u.yaw),se=-Math.cos(u.yaw),ie=Math.abs(Gt)>Math.abs(se)?Gt>0?1:3:se>0?2:0,Fe=h.get(R.id+["","_e","_s","_w"][ie]);Fe&&(vt=Fe.n)}else if(R.place==="rail"){if(!h.flat.solid[B.get(X,ot-1,ht)])return null;let Gt=-Math.sin(u.yaw),se=-Math.cos(u.yaw);vt=h.num(Ao(!!R.powered,sc(un,X,ot,ht,!!R.powered,Math.abs(Gt)>Math.abs(se)?"e":"n").shape))}return{x:X,y:ot,z:ht,n:vt}}function p0(f){let S=d0(f);if(!S){Ls.visible=!1;return}let R=h.flat.shape[S.n],P=h.flat.boxes[S.n]||(R===4?l0:R===8?c0:R>=1&&R<=3?KM:JM);Pc.forEach((F,X)=>{let ot=P[X];F.visible=!!ot,ot&&(F.scale.set((ot[3]-ot[0])*.98,(ot[4]-ot[1])*.98,(ot[5]-ot[2])*.98),F.position.set(S.x+(ot[0]+ot[3])/2,S.y+(ot[1]+ot[4])/2,S.z+(ot[2]+ot[5])/2))}),Ls.visible=!0}function Lf(f){f.saddled=!0;let S=qt.get(f.id);if(!S)return;let R=new Oe(new Qe(.62,.1,.6),Xo("#5C3A24"));R.position.set(0,1.4,.05),S.add(R)}function Ir(f,S){let R=S.veh?S.veh.obj:null;u.ride=Object.assign({kind:f,obj:R,yaw:S.veh?S.veh.yaw:u.yaw},S),u.fly=!1,St.root.classList.remove("flying"),u.v={x:0,y:0,z:0},St.bRide.hidden=!1,kn(),Ye("ride:"+f),Nt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[f])}function Pr(f){let S=u.ride;if(S){if(u.ride=null,St.bRide.hidden=!0,S.veh&&(S.veh.p={x:u.p.x,y:u.p.y,z:u.p.z},S.veh.yaw=S.yaw,S.st&&(S.st.v=0,S.veh.st=S.st)),S.kind==="horse"&&(S.m.riding=!1),S.kind==="minecart")u.p.y+=.2;else for(let[R,P]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let F={x:u.p.x+R,y:Math.floor(u.p.y+.5),z:u.p.z+P};if(zp(F,$t)&&h.flat.solid[B.get(F.x,F.y-1,F.z)]){u.p=F;break}}u.v={x:0,y:0,z:0},u.fallTop=u.p.y,f||Nt("\u4E0B\u4F86\u4E86")}}function m0(f){let S=b.slots[u.sel];if(!f.tame){S&&(S.id==="wheat"||S.id==="apple")?(t.consume&&qn(b,u.sel,1),Ce(),f.fed=(f.fed||0)+1,f.fed>=3?(f.tame=!0,u.horseMob=f,u.dirtyMeta=!0,Nt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):Nt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${f.fed}/3\uFF09`)):Nt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!f.saddled){S&&S.id==="saddle"?(t.consume&&qn(b,u.sel,1),Ce(),Lf(f),u.horseMob=f,u.dirtyMeta=!0,Nt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):Nt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}u.ride||(f.riding=!0,u.p={x:f.p.x,y:f.p.y,z:f.p.z},Ir("horse",{m:f}),u.stats.rodeHorse=(u.stats.rodeHorse||0)+1)}function g0(f,S,R,P,F,X,ot){let ht=u.ride;if(ht.kind==="boat"){let ct=(P*R+X*S)*7,vt=(F*R+ot*S)*7,Gt=1-Math.exp(-2.5*f);u.v.x+=(ct-u.v.x)*Gt,u.v.z+=(vt-u.v.z)*Gt,u.v.y=0;let se=(Re,rn)=>h.flat.liquid[B.get(Re,ht.y-1,rn)]===1&&!h.flat.solid[B.get(Re,ht.y,rn)],ie=u.p.x+u.v.x*f,Fe=u.p.z+u.v.z*f;se(ie+Math.sign(u.v.x)*.6,u.p.z)?u.p.x=ie:u.v.x=0,se(u.p.x,Fe+Math.sign(u.v.z)*.6)?u.p.z=Fe:u.v.z=0,u.p.y=ht.y-.15,Math.hypot(u.v.x,u.v.z)>.3&&(ht.yaw=Math.atan2(-u.v.x,-u.v.z))}else{yu(ht.st,f,R,un);let ct=rc(ht.st);u.p.x=ct.x,u.p.z=ct.z,u.p.y=ct.y+.05,ht.yaw=ct.yaw,ht.pitch=ct.pitch,u.v.x=u.v.z=u.v.y=0}u.fallTop=u.p.y}let Lc=(()=>{let f=new dn,S=new Oe(new Qe(.16,.1,.16),Xo("#E0352B")),R=new Oe(new Qe(.16,.08,.16),Xo("#EFEBDD"));return S.position.y=.05,R.position.y=-.04,f.add(S,R),f.visible=!1,Q.add(f),f})();function x0(){let f=u.lastRay,S=f&&mr(f.o,f.d,Sc+3,xe,R=>h.flat.liquid[R]||h.flat.solid[R]);return!S||!h.flat.liquid[S.n]||B.get(S.x,S.y+1,S.z)?(Nt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(u.fish=Mu(Math.random),u.fish.at={x:S.x+.5,y:S.y+1,z:S.z+.5},Lc.visible=!0,Nt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Dc(){u.fish=null,Lc.visible=!1}function _0(){let f=Su(u.fish);if(Dc(),f!=="catch"){Nt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let S=d.fishing.loot,R=wu(S,Math.random);if(R.coins&&!t.coins&&(R=S[0]),R.coins)Ti(A,R.coins),Dn(),Nt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${R.coins} \u91D1\u5E63`);else{let P=bn(b,R.id,R.n,_);for(let F=0;F<P;F++)At(R.id,u.p.x,u.p.y+1,u.p.z);Nt(R.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${h.name(R.id)} \xD7${R.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Bo(b,u.sel,h).broke&&Nt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),Ce(),u.dirtyMeta=!0,mn("pickup"),Ye("fish"),R.treasure&&Ye("treasure")}let Xi=2,qo=br("hw_minimap","on")!=="off";function y0(f){qo=f,Sr("hw_minimap",f?"on":"off"),St.mini.hidden=!f}St.mini.hidden=!qo;function v0(){let f=St.mini,S=f.getContext("2d");S.fillStyle="#D9D3C0",S.fillRect(0,0,f.width,f.height),M.draw(S,u.p.x,u.p.z,2,f.width,f.height),Eu(S,f.width/2,f.height/2,u.yaw,7,"#E0352B")}function Nc(){let f=St.ov;f.innerHTML="",f.hidden=!1;let S=Math.max(240,Math.min(innerWidth-60,760)),R=Math.max(200,Math.min(innerHeight-200,540)),P=U("canvas",{class:"bigmap",width:S,height:R}),F=P.getContext("2d");F.fillStyle="#D9D3C0",F.fillRect(0,0,S,R);let{x0:X,z0:ot}=M.draw(F,u.p.x,u.p.z,Xi,S,R),ht=(ie,Fe)=>[(ie-X)*Xi,(Fe-ot)*Xi],ct=(ie,Fe,Re,rn,ge)=>{let[kt,jt]=ht(ie,Fe);kt<-20||jt<-20||kt>S+20||jt>R+20||(F.fillStyle=rn,F.strokeStyle=rn,F.lineWidth=3,ge==="roof"?(F.beginPath(),F.moveTo(kt-8,jt+1),F.lineTo(kt,jt-7),F.lineTo(kt+8,jt+1),F.fill(),F.fillRect(kt-5,jt+1,10,7)):ge==="ring"?(F.beginPath(),F.arc(kt,jt,6,0,7),F.stroke()):F.fillRect(kt-5,jt-5,10,10),F.font="bold 12px sans-serif",F.textAlign="center",F.strokeStyle="#EFEBDD",F.strokeText(Re,kt,jt-11),F.fillStyle="#26302A",F.fillText(Re,kt,jt-11))},vt=Math.max(S,R)/Xi;for(let ie of T.villages.around(u.p.x-vt,u.p.z-vt,u.p.x+vt,u.p.z+vt))M.explored(ie.x,ie.z)&&ct(ie.x,ie.z,"\u6751\u838A","#8C5A3A","roof");for(let ie of M.portals.values())ct(ie.x+.5,ie.z+.5,ie.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");ct(pt.x,pt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),u.bed&&ct(u.bed.x+.5,u.bed.z+.5,"\u5E8A","#E0352B");let[Gt,se]=ht(u.p.x,u.p.z);Eu(F,Gt,se,u.yaw,9,"#E0352B"),f.append(U("div",{class:"panel map"},U("div",{class:"p-head"},U("h2",{},"\u5730\u5716"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),P,U("div",{class:"row"},U("button",{class:"btn small",onclick:()=>{Xi=Math.min(6,Xi+1),Nc()}},"\u653E\u5927"),U("button",{class:"btn small",onclick:()=>{Xi=Math.max(1,Xi-1),Nc()}},"\u7E2E\u5C0F"),U("label",{class:"set inline"},U("input",{type:"checkbox",checked:qo?!0:null,onchange:ie=>y0(ie.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),U("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function M0(){let f=St.ov;f.innerHTML="",f.hidden=!1;let S=N.filter(P=>C.done[P.id]).length,R=U("div",{class:"ach-list"});N.forEach(P=>{let F=!!C.done[P.id];R.append(U("div",{class:"ach-item"+(F?" done":"")},U("i",{class:"badge"}),U("div",{},U("b",{},P.name_zh),U("small",{},P.desc_zh+(F?"\u3000\u2713":`\uFF08${Kp(C,P)}/${P.need}\uFF09`)+(P.coins?`\u3000\u734E\u52F5 ${P.coins} \u91D1\u5E63`:"")))))}),f.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},`\u6210\u5C31\u3000${S} / ${N.length}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),R))}async function b0(f){u.travelling||(u.travelling=!0,Pr(!0),Dc(),kn(),Nt(f==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await wn(!0),Sr("hw_dim",f),u.resetting=!0,location.reload())}function Uc(){let f=u.boss;f&&(St.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${f.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Ro[f.st.phase].name_zh}`,St.bossHp.style.width=Math.max(0,f.st.hp/Co*100)+"%")}function S0(f){if(e!=="shadow"||C.stats.dragon)return;let S=ki,R=Math.hypot(u.p.x-S.x,u.p.z-S.z);if(!u.boss&&R<60&&B.ready(S.x,S.z)){let X=rm();Q.add(X),u.boss={g:X,st:im(),p:{x:S.x+.5,y:ci+1.5,z:S.z+.5},m:{kind:"boss",id:-1},t:0}}let P=u.boss;if(!P)return;P.t+=f,P.g.position.set(P.p.x,P.p.y+Math.sin(P.t*1.6)*.25,P.p.z),P.g.rotation.y=Math.atan2(-(u.p.x-P.p.x),-(u.p.z-P.p.z)),om(P.g,P.t,f);let F=R<28;F===St.bossbar.hidden&&(St.bossbar.hidden=!F,F&&(Uc(),P.greeted||(P.greeted=!0,Nt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function w0(){let f=u.boss;if(!f||f.busy)return;f.busy=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),u.overlay="ask";let S=Ro[f.st.phase],R=Yt().slice(0,40).sort(()=>Math.random()-.5);Wu(St.ov,{ids:f.st.retry.concat(R),types:S.types,modules:S.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${S.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(P,F,X)=>{u.overlay=null,f.busy=!1,P!=null&&Df(P,F,X&&X.id)}})}function Df(f,S,R){let P=u.boss;if(!P)return;let F=sm(P.st,f,S,R);if(!f){let X=u.p.x-P.p.x,ot=u.p.z-P.p.z,ht=Math.hypot(X,ot)||1;u.v.x=X/ht*8,u.v.z=ot/ht*8,u.v.y=5,Nt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Uc();return}if(P.g.userData.hitT=.3,mn("hit","stone"),F.done){A0();return}F.phaseUp!=null?(am(P.g,F.phaseUp),Nt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${F.phaseUp+1} \u968E\u6BB5\uFF1A${Ro[F.phaseUp].name_zh}`)):Nt(S?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Uc()}function A0(){Q.remove(u.boss.g),u.boss=null,St.bossbar.hidden=!0,t.coins&&(Ti(A,Iu),Dn()),Ye("dragon"),wn(),E0()}function E0(){kn(),document.pointerLockElement&&document.exitPointerLock(),u.overlay="ending";let f=St.ov;f.innerHTML="",f.hidden=!1;let S=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${Iu} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];f.append(U("div",{class:"ending"},U("div",{class:"paper sun"}),U("div",{class:"paper hill"}),U("div",{class:"paper hill b"}),U("div",{class:"credits"},U("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),S.map(R=>U("p",{},R)),U("button",{class:"btn big",onclick:he},"\u7E7C\u7E8C\u5192\u96AA"))))}addEventListener("keydown",f=>{if(f.target&&f.target.tagName==="INPUT")return;let S=f.key.toLowerCase();if(S==="e"){u.overlay==="inv"?he():!u.overlay&&pe("inv"),f.preventDefault();return}if(u.overlay!=="dead"&&!(u.overlay==="ask"||u.overlay==="quest")){if(S==="escape"&&u.overlay){u.overlay==="quiz"?(St.ov.hidden=!0,St.ov.innerHTML="",u.overlay=null):he();return}if(!u.overlay){if(S==="shift"&&u.ride){Pr();return}u.keys[S]=!0,f.code==="Space"&&(u.keys[" "]=!0,f.preventDefault()),S>="1"&&S<="9"&&(u.sel=+S-1,Ce()),S==="f"&&Jn(),S==="v"&&Ue(),S==="m"&&pe("map"),S==="k"&&pe("ach")}}}),addEventListener("keyup",f=>{u.keys[f.key.toLowerCase()]=!1,f.code==="Space"&&(u.keys[" "]=!1)}),addEventListener("blur",()=>{u.keys={},kn()}),nt.addEventListener("mousedown",f=>{if(!(u.touch||u.overlay)){if(document.pointerLockElement!==nt){nt.requestPointerLock&&nt.requestPointerLock();return}if(f.button===0){let S=Zt("center");if(S){Le(S);return}u.mining.active=!0,u.mining.src="center"}if(f.button===2){let S=Zt("center");if(S&&S.kind==="vehicle"){Rc(S.veh);return}Cr(Kn("center")),u.placeRepeat=.3,u.rightHeld=!0}}}),addEventListener("mouseup",f=>{f.button===0&&kn(),f.button===2&&(u.rightHeld=!1)}),nt.addEventListener("contextmenu",f=>f.preventDefault()),addEventListener("mousemove",f=>{document.pointerLockElement===nt&&(u.yaw-=f.movementX*.0024,u.pitch=Math.max(-1.55,Math.min(1.55,u.pitch-f.movementY*.0024)))}),addEventListener("wheel",f=>{u.overlay||u.touch||(u.sel=(u.sel+(f.deltaY>0?1:8))%9,Ce())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{St.root.classList.toggle("locked",document.pointerLockElement===nt)});let Lr=new Map;function T0(f){u.touch!==f&&(u.touch=f,St.root.classList.toggle("touch",f),document.body.classList.toggle("is-touch",f))}St.root.classList.toggle("touch",u.touch),document.body.classList.toggle("is-touch",u.touch),nt.addEventListener("pointerdown",f=>{if(f.pointerType!=="touch"||(T0(!0),u.overlay))return;if(f.preventDefault(),f.clientX<innerWidth*.4&&f.clientY>innerHeight*.35&&!u.joy.active){u.joy={x:0,y:0,active:!0,id:f.pointerId,ox:f.clientX,oy:f.clientY},St.joy.style.transform=`translate(${f.clientX-60}px, ${f.clientY-60}px)`,St.joy.hidden=!1,St.knob.style.transform="translate(0px,0px)",Lr.set(f.pointerId,{kind:"joy"});return}let S={kind:"look",x:f.clientX,y:f.clientY,sx:f.clientX,sy:f.clientY,t0:performance.now(),drag:!1,hold:!1};S.timer=setTimeout(()=>{if(S.drag)return;let R=Zt("screen",S.x,S.y);if(R&&R.kind==="vehicle"){Ic(R.veh),S.vehHit=!0;return}S.hold=!0,u.mining.active=!0,u.mining.src="screen",u.mining.sx=S.x,u.mining.sy=S.y},280),Lr.set(f.pointerId,S),u.touchPress=S},{passive:!1}),addEventListener("pointermove",f=>{let S=Lr.get(f.pointerId);if(!S)return;if(S.kind==="joy"){let F=f.clientX-u.joy.ox,X=f.clientY-u.joy.oy,ot=Math.hypot(F,X),ht=55;ot>ht&&(F*=ht/ot,X*=ht/ot),u.joy.x=F/ht,u.joy.y=X/ht,St.knob.style.transform=`translate(${F}px,${X}px)`;return}let R=f.clientX-S.x,P=f.clientY-S.y;S.x=f.clientX,S.y=f.clientY,!S.drag&&Math.hypot(S.x-S.sx,S.y-S.sy)>12&&(S.drag=!0,clearTimeout(S.timer),S.hold&&(kn(),S.hold=!1)),S.drag?(u.yaw-=R*.0055,u.pitch=Math.max(-1.55,Math.min(1.55,u.pitch-P*.0055))):S.hold&&(u.mining.sx=S.x,u.mining.sy=S.y)});let Nf=f=>{let S=Lr.get(f.pointerId);if(S){if(Lr.delete(f.pointerId),u.touchPress===S&&(u.touchPress=null),S.kind==="joy"){u.joy={x:0,y:0,active:!1},St.joy.hidden=!0;return}if(clearTimeout(S.timer),S.hold)kn();else if(!S.drag&&performance.now()-S.t0<280&&!u.overlay){let R=Zt("screen",S.x,S.y);R&&R.kind==="vehicle"?Rc(R.veh):R?Le(R):Cr(Kn("screen",S.x,S.y))}}};addEventListener("pointerup",Nf),addEventListener("pointercancel",Nf);let Uf=(f,S,R)=>{f.addEventListener("pointerdown",P=>{P.preventDefault(),P.stopPropagation(),S()}),f.addEventListener("pointerup",R),f.addEventListener("pointercancel",R),f.addEventListener("pointerleave",R)};Uf(St.bJump,()=>{u.jumpHeld=!0},()=>{u.jumpHeld=!1}),Uf(St.bDown,()=>{u.downHeld=!0},()=>{u.downHeld=!1}),St.bFly.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),Jn()}),St.bPlace.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),Cr(Kn("center"))}),document.addEventListener("touchmove",f=>{f.target.closest(".scroll, .panel")||f.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(f=>document.addEventListener(f,S=>S.preventDefault(),{passive:!1})),St.start.hidden=!1,St.go.onclick=()=>{St.start.hidden=!0,u.started=!0,u.paused=!1,St.root.classList.add("started"),!u.touch&&nt.requestPointerLock&&nt.requestPointerLock()};async function wn(f){if(u.resetting)return;u.ride&&u.ride.veh&&(u.ride.veh.p={x:u.p.x,y:u.p.y,z:u.p.z},u.ride.veh.yaw=u.ride.yaw);let S={hw_meta:{v:1,seed:x,time:u.time,build:bc},hw_player:{dims:Object.assign({},u.dimPos,{[e]:{x:u.p.x,y:u.p.y,z:u.p.z,yaw:u.yaw}}),x:u.p.x,y:u.p.y,z:u.p.z,yaw:u.yaw,pitch:u.pitch,fly:u.fly,sel:u.sel,hp:E.hp,bed:u.bed,armor:u.armor,armorDur:u.armorDur,horse:u.horseMob&&!u.horseMob.gone?{x:u.horseMob.p.x,y:u.horseMob.p.y,z:u.horseMob.p.z,saddled:!!u.horseMob.saddled}:u.horse},hw_inventory:Do(b),hw_coins:um(A),[i("hw_furnaces")]:q,[i("hw_chests")]:Object.fromEntries(Object.entries(O).map(([R,P])=>[R,Do(P)])),[i("hw_crops")]:V,hw_quests:k,hw_portal_claimed:z.slice(-200),hw_ach:C,[i("hw_vehicles")]:u.vehicles.map(R=>({kind:R.kind,x:R.p.x,y:R.p.y,z:R.p.z,yaw:R.yaw,wy:R.y,st:R.st?{x:R.st.x,y:R.st.y,z:R.st.z,shape:R.st.shape,from:R.st.from,s:R.st.s}:null}))};M.dirty&&(f||Date.now()-(u.mapSavedAt||0)>3e4)&&(S[i("hw_map")]=M.serialize(),u.mapSavedAt=Date.now());for(let R of u.dirty){let P=L.get(R);P&&(S[s+R]=Ou(P))}u.dirty.clear(),u.dirtyMeta=!1;try{await Vu(S),u.lastSave=Date.now()}catch(R){console.warn("save failed",R)}}setInterval(()=>{u.started&&wn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&u.started&&wn(!0)}),addEventListener("pagehide",()=>{u.started&&wn(!0)}),u.stats={mined:0,placed:0};function Ff(){let f=innerWidth,S=innerHeight;$.setSize(f,S,!1),mt.aspect=f/S,mt.updateProjectionMatrix()}addEventListener("resize",Ff),Ff(),Dn(),Ce(),Ri(),j(),t.creative&&(Hi("#coinpill").hidden=!0,Hi("#modebadge").hidden=!1,St.btnShop.hidden=!0,St.hearts.hidden=!0),(Array.isArray(y.vehs)?y.vehs:[]).forEach(f=>{f&&(f.kind==="boat"||f.kind==="minecart"&&f.st)&&Cc(f.kind,f,f.yaw||0,f.kind==="boat"?{y:f.wy}:{st:Object.assign({v:0,lastIn:0},f.st)})}),tn(),e==="shadow"&&(Ye("shadow"),setTimeout(()=>Nt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",f=>{f.persisted&&tn()});let Of=performance.now(),Yo=0,Fc=0,C0=new le("#EFEBDD"),R0=new le("#22302F"),I0=new le("#E6B48C");function Bf(f){requestAnimationFrame(Bf);let S=(f-Of)/1e3;Of=f;let R=Math.min(.05,S);u.frames.push(S*1e3),u.frames.length>4e3&&u.frames.shift(),B.update(u.p.x,u.p.z);let P=B.ready(u.p.x,u.p.z);if(u.auto&&N0(R),u.started&&!u.overlay&&P&&L0(R),u.started&&P&&!u.travelling){let ge=h.get(B.get(u.p.x,u.p.y+.2,u.p.z));ge&&ge.interact==="shadow_portal"?!u.portalLock&&t.portals&&(u.portalT=(u.portalT||0)+R,u.portalT>1&&b0(e==="shadow"?"overworld":"shadow")):(u.portalLock=!1,u.portalT=0)}u.started&&!u.dead&&Sf(E,R)&&(Ri(),u.dirtyMeta=!0),u.time=(u.time+R/ZM)%1;let F=u.time*Math.PI*2,X=Math.sin(F),ot=e==="shadow"?.42:Math.min(1,Math.max(0,(X+.12)/.42));st.copy(R0).lerp(C0,ot);let ht=Math.max(0,1-Math.abs(X)/.3)*(ot>.05?1:.4);if(st.lerp(I0,ht*.55),e==="shadow"&&st.set("#1C2620"),!(t.creative&&br("hw_weather","on")==="off")?uf(u.weather,R):u.weather.level=0,u.ambT=(u.ambT||0)+R,u.ambT>1){u.ambT=0;let ge=Math.floor(u.p.x),kt=Math.floor(u.p.z),jt=!1;for(let Ie=2;Ie<14&&!jt;Ie++)h.flat.opaque[B.get(ge,Math.floor(u.p.y)+Ie,kt)]&&(jt=!0);u.underground=jt&&u.p.y<T.height(ge,kt)-4,u.biome=T.biomeOf(ge,kt);let we=lf({day:ot,underground:u.underground});we!==u.musicScene&&(u.musicScene=we,rf(cf[we]))}let vt=u.underground||e==="shadow"?null:ff(u.biome,u.weather),Gt=vt?u.weather.level:0;Gt&&st.lerp(u.rainSky||(u.rainSky=new le("#8E9590")),.45*Gt),D(R,mt.position,vt),of(vt==="rain"?Gt:0),us(u.overlay==="quiz"||u.overlay==="ask"||u.overlay==="quest"),wt.uniforms.uDay.value=ot*(1-.3*Gt),wt.uniforms.uFog.value.set(...P0(st));let se=Wo();u.eyeOff*=Math.pow(5e-4,R);let ie=Ps();if(u.view==="tp"){let ge=mr(se,{x:-ie.x,y:-ie.y,z:-ie.z},4,xe,jt=>h.flat.opaque[jt]===1),kt=ge?Math.max(.4,ge.dist-.25):4;mt.position.set(se.x-ie.x*kt,se.y-ie.y*kt,se.z-ie.z*kt)}else mt.position.set(se.x,se.y,se.z);mt.rotation.set(u.pitch,u.yaw,0);let Fe=mt.far*.8;if(ee.position.set(mt.position.x+Math.cos(F)*Fe,mt.position.y+Math.sin(F)*Fe,mt.position.z+.25*Fe),ee.scale.setScalar(Fe*.14),ue.position.set(mt.position.x-Math.cos(F)*Fe,mt.position.y-Math.sin(F)*Fe,mt.position.z-.25*Fe),ue.scale.setScalar(Fe*.1),ee.visible=ue.visible=e!=="shadow",v.visible=u.view==="tp",v.visible){v.position.set(u.p.x,u.p.y+(u.ride?a0[u.ride.kind]:0),u.p.z),v.rotation.y=u.yaw;let ge=Math.hypot(u.v.x,u.v.z),kt=Math.sin(f/120)*Math.min(1,ge/4)*.7;et.rotation.x=kt,at.rotation.x=-kt,Tt.rotation.x=-kt,It.rotation.x=kt;let jt=.35+.65*ot;v.children.forEach(we=>we.material.color.copy(we.userData.base).multiplyScalar(jt))}for(let ge in lt)lt[ge].color.setScalar(.4+.6*ot);Pf.color.setScalar(.5+.5*ot);for(let ge in Rr)Rr[ge].color.copy(Rr[ge].userData.base).multiplyScalar(.35+.65*ot);u.ride&&u.ride.obj&&(u.ride.obj.position.set(u.p.x,u.p.y,u.p.z),u.ride.obj.rotation.y=u.ride.yaw,u.ride.obj.rotation.x=u.ride.pitch||0);let Re=u.started&&!u.overlay?u.mining.active&&u.mining.src==="screen"?Kn("screen",u.mining.sx,u.mining.sy):Kn("center"):null;if(Re){dt.visible=!0;let ge=Tc(Re.n);if(ge){let kt=1,jt=1,we=1,Ie=0,$e=0,Vn=0;for(let Ds of ge)kt=Math.min(kt,Ds[0]),jt=Math.min(jt,Ds[1]),we=Math.min(we,Ds[2]),Ie=Math.max(Ie,Ds[3]),$e=Math.max($e,Ds[4]),Vn=Math.max(Vn,Ds[5]);dt.scale.set(Ie-kt,$e-jt,Vn-we),dt.position.set(Re.x+(kt+Ie)/2,Re.y+(jt+$e)/2,Re.z+(we+Vn)/2)}else dt.scale.set(1,1,1),dt.position.set(Re.x+.5,Re.y+.5,Re.z+.5)}else dt.visible=!1;let rn=u.touchPress;if(p0(!u.started||u.overlay||u.mining.active?null:u.touch?rn&&!rn.drag&&!rn.hold?Kn("screen",rn.x,rn.y):null:Re),u.mining.active&&Re){let ge=Re.x+","+Re.y+","+Re.z;ge!==u.mining.k&&(u.mining.k=ge,u.mining.t=0),u.mining.t+=R;let kt=t.creative?h.get(Re.n).hardness<0?1/0:t.breakTime:_c(h.get(Re.n),If()).time;if(kt===1/0)Qt.visible=!1,u.mining.warned||(Nt(h.name(Re.n)+"\u6316\u4E0D\u52D5"),u.mining.warned=!0);else{u.mining.tick=(u.mining.tick||0)+R,u.mining.tick>.25&&(u.mining.tick=0,mn("hit",vr(h.get(Re.n))));let jt=u.mining.t/kt;Qt.visible=!0,Qt.position.copy(dt.position),Qt.scale.copy(dt.scale),Qt.material.map=Vt[Math.min(3,Math.floor(jt*4))],jt>=1&&(u0(Re),u.mining.k="",u.mining.t=0,Qt.visible=!1)}}else Qt.visible=!1,u.mining.active||(u.mining.warned=!1);if(u.rightHeld&&!u.overlay&&(u.placeRepeat-=R,u.placeRepeat<=0&&(Cr(Kn("center")),u.placeRepeat=.25)),D0(R),u.fish){let ge=bu(u.fish,R),kt=b.slots[u.sel];!kt||kt.id!=="fishing_rod"||Math.hypot(u.p.x-u.fish.at.x,u.p.z-u.fish.at.z)>16?Dc():(ge==="bite"?(Nt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),mn("pickup")):ge==="escape"&&Nt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Lc.position.set(u.fish.at.x,u.fish.at.y-.05+(u.fish.phase==="bite"?-.18:Math.sin(f/400)*.03),u.fish.at.z))}if(u.mapT=(u.mapT||0)+R,u.mapT>.3&&(u.mapT=0,M.scan(B,u.mapDirty),qo&&v0()),u.cropT=(u.cropT||0)+R,u.cropT>2){u.cropT=0;let ge=Date.now();for(let kt in V){let[jt,we,Ie]=kt.split(",").map(Number);if(!B.ready(jt,Ie))continue;let $e=h.get(B.get(jt,we,Ie));if(!$e||!$e.crop){delete V[kt];continue}let Vn=Yu(V[kt].t,ge,V[kt].wet);Vn>($e.stage|0)&&(B.set(jt,we,Ie,h.num("wheat_"+Vn)),u.dirtyMeta=!0)}}gt(u.overlay?0:R,ot,f),S0(u.overlay?0:R);for(let ge in q){let kt=q[ge];kt.jobs.length&&(gf(kt,R),u.dirtyMeta=!0,u.overlay==="furnace"&&ge===fe&&(u.furnUi=(u.furnUi||0)+R)>.5&&(u.furnUi=0,me()))}$.render(Q,mt),Yo+=S,Fc++,Yo>.5&&(St.dbg&&(St.dbg.textContent=`${Math.round(Fc/Yo)} fps \xB7 \u5340\u584A ${B.stats.loaded} \xB7 ${Op[T.biomeOf(Math.floor(u.p.x),Math.floor(u.p.z))]} \xB7 ${u.p.x.toFixed(1)}, ${u.p.y.toFixed(1)}, ${u.p.z.toFixed(1)}`),Yo=0,Fc=0),!P&&u.started?St.loading.hidden=!1:St.loading.hidden=!0}function P0(f){let S=f.getHexString();return[parseInt(S.slice(0,2),16)/255,parseInt(S.slice(2,4),16)/255,parseInt(S.slice(4,6),16)/255]}function L0(f){let S=u.keys,R=(S.d?1:0)-(S.a?1:0),P=(S.w?1:0)-(S.s?1:0);u.joy.active&&(R=u.joy.x,P=-u.joy.y);let F=Math.min(1,Math.hypot(R,P));if(F>0){let $e=Math.hypot(R,P);R=R/$e*F,P=P/$e*F}let X=-Math.sin(u.yaw),ot=-Math.cos(u.yaw),ht=Math.cos(u.yaw),ct=-Math.sin(u.yaw);if(u.ride&&u.ride.kind!=="horse"){g0(f,R,P,X,ot,ht,ct);return}let vt=S.control||!u.fly&&S.shift||u.joy.active&&F>.92,Gt=xe(u.p.x,u.p.y+.1,u.p.z),se=xe(u.p.x,u.p.y+1,u.p.z),ie=h.flat.liquid[Gt]===1||h.flat.liquid[se]===1,Fe=u.fly?10:u.ride?8.5:ie?2.6:vt?6.2:4.3,Re=(X*P+ht*R)*Fe,rn=(ot*P+ct*R)*Fe,ge=S[" "]||u.jumpHeld,kt=u.fly&&S.shift||u.downHeld;if(u.fly)u.v.x=Re,u.v.z=rn,u.v.y=((ge?1:0)-(kt?1:0))*8;else{let $e=u.onGround?14:5,Vn=1-Math.exp(-$e*f);u.v.x+=(Re-u.v.x)*Vn,u.v.z+=(rn-u.v.z)*Vn,ie?(u.v.y-=9*f,u.v.y<-3&&(u.v.y=-3),ge&&(u.v.y=3.4)):h.flat.climb[Gt]||h.flat.climb[se]?(u.v.y=ge||P>.1?3.2:kt?-3:Math.max(u.v.y-28*f,-1.5),u.fallTop=u.p.y):(u.v.y-=28*f,u.v.y<-40&&(u.v.y=-40),ge&&u.onGround&&(u.v.y=u.ride?10.5:8.6,u.onGround=!1))}let jt=u.onGround,we=nc(u.p,u.v,f,$t,{canStep:!u.fly,grounded:u.onGround});if(u.onGround=we.onGround,we.stepped&&(u.eyeOff-=we.stepped),u.fallTop==null||u.fly||ie||u.onGround&&jt?u.fallTop=u.p.y:u.onGround||(u.fallTop=Math.max(u.fallTop,u.p.y)),u.onGround&&!jt){let $e=Mf(u.fallTop-u.p.y,{water:ie,flying:u.fly});$e&&(Er($e),Nt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),u.fallTop=u.p.y}let Ie=Math.hypot(u.v.x,u.v.z);u.onGround&&!u.fly&&Ie>1&&(u.stepT=(u.stepT||0)+f*Ie,u.stepT>1.8&&(u.stepT=0,mn("step",vr(h.get(xe(u.p.x,u.p.y-.5,u.p.z)))))),u.p.y<-20&&(u.p={x:pt.x,y:pt.y+1,z:pt.z},u.v={x:0,y:0,z:0},u.fallTop=u.p.y)}function D0(f){let S=u.p.x,R=u.p.y+.9,P=u.p.z;for(let F=u.drops.length-1;F>=0;F--){let X=u.drops[F];X.age+=f;let ot=S-X.p.x,ht=R-X.p.y,ct=P-X.p.z,vt=Math.hypot(ot,ht,ct);if(vt<1.5&&X.age>.25&&bn(b,X.id,1,_)===0){Q.remove(X.s),u.drops.splice(F,1),u.dirtyMeta=!0,Ce(),mn("pickup");continue}if(vt<4.5&&X.age>.25?(X.v.x=ot/vt*6,X.v.y=ht/vt*6,X.v.z=ct/vt*6,X.p.x+=X.v.x*f,X.p.y+=X.v.y*f,X.p.z+=X.v.z*f):(X.v.y-=18*f,X.v.x*=.9,X.v.z*=.9,nc(X.p,X.v,f,$t,{w:.25,h:.25})),X.age>300){Q.remove(X.s),u.drops.splice(F,1);continue}X.s.position.set(X.p.x,X.p.y+.2+Math.sin(X.age*3)*.06,X.p.z)}}u.auto=Cf.get("auto")==="walk";let zf=0;function N0(f){u.started||St.go.click(),zf+=f,u.keys.w=!0,u.keys[" "]=zf%1.6<.15,u.yaw+=f*.08}window.HW={build:bc,G:u,reg:h,inv:b,wallet:A,world:B,Inv:Fu,Aud:af,Amb:df,chests:O,crops:V,Farm:nf,clickSlot:w,MODE:n,RULE:t,switchMode:In,questState:k,tradesJson:p,spawnVillagers:Pt,terr:T,claimPortalRewards:tn,portals:I,claimedIds:z,mobS:Et,mobDefs:Ct,spawnMob:Rt,hitMob:Le,mobAt:Zt,surfaceY:ce,health:E,hurt:Er,Health:Ef,furnaces:q,Smelt:yf,smeltList:K,recipes:g,craftCtx:Rs,breakInfo:_c,start(){St.go.click()},state(){return{pos:{...u.p},coins:A.coins,inv:Do(b),loaded:B.stats.loaded,stats:{...u.stats},overlay:u.overlay,fly:u.fly}},lookAt(f,S,R){let P=Wo(),F=f-P.x,X=S-P.y,ot=R-P.z;u.yaw=Math.atan2(-F,-ot),u.pitch=Math.atan2(X,Math.hypot(F,ot))},target(){let f=Kn("center");return f&&{x:f.x,y:f.y,z:f.z,n:f.n,face:f.face}},mine(f){f?(u.mining.active=!0,u.mining.src="center"):kn()},use(){return Cr(Kn("center"))},key(f,S){u.keys[f]=S},open:pe,close:he,save:wn,spawn:pt,dismount:Pr,Rail:vu,ach:C,mapv:M,Fish:Au,bump:Ye,DIM:e,bossDamage:Df,Shadow:Ru,hitVehicle:Ic,rideVehicle:Rc,ghostState:()=>({visible:Ls.visible,sy:Pc[0].scale.y,two:Pc[1].visible}),perf(){return{frames:u.frames.slice(),meshMs:B.stats.meshMs.slice(),genMs:B.stats.genMs.slice(),loaded:B.stats.loaded}},resetPerf(){u.frames.length=0,B.stats.meshMs.length=0,B.stats.genMs.length=0},info:()=>({calls:$.info.render.calls,tris:$.info.render.triangles,geos:$.info.memory.geometries,objs:Q.children.length}),ready:()=>B.ready(u.p.x,u.p.z)},requestAnimationFrame(Bf)}function eb(){let n=Hi("#ui"),t=e=>n.querySelector(e);return Cf.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Hi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Hi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Hi("#start"),go:Hi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}tb().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
